/*
飞牛Nas 论坛 — Quantumult X 脚本
功能：
1. 自动抓取并保存 Cookie（在浏览器访问页面时自动获取）
2. 执行定时签到（每天自动打卡）
3. 获取打卡动态信息

[rewrite_local]
^https: \/\/club\. fnnas\.com\/plugin\. php\?id=zqlj_sign script-response-header https://raw.githubusercontent.com/agesky/zhihui/refs/heads/master/fnnasclub.js

[mitm]
hostname = club.fnnas.com

*/

const COOKIE_KEY = 'fnnasclub_cookie';
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36';
const BASE_URL = 'https://club.fnnas.com/plugin.php?id=zqlj_sign';

// 平台判断
const isQX = typeof $task !== 'undefined';
const isSurge = typeof $httpClient !== 'undefined' && ! isQX;
const isNode = typeof require === 'function' && ! isQX && !isSurge;

// 通知函数
const notify = (title, subtitle, message) => {
  if (isQX) {
    $notify(title, subtitle, message);
  } else if (isSurge) {
    $notification. post(title, subtitle, message);
  } else if (isNode) {
    console.log(`[${title}] ${subtitle}\n${message}`);
  }
};

// 存储写入
const storeWrite = (key, val) => {
  if (isQX) return $prefs.setValueForKey(val, key);
  if (isSurge) return $persistentStore.write(val, key);
  if (isNode) {
    const fs = require('fs');
    try {
      const path = '. /. fnnasclub_store.json';
      let obj = {};
      if (fs.existsSync(path)) obj = JSON.parse(fs.readFileSync(path));
      obj[key] = val;
      fs.writeFileSync(path, JSON.stringify(obj, null, 2));
      return true;
    } catch (e) {
      console.error('存储写入失败:', e);
    }
  }
};

// 存储读取
const storeRead = (key) => {
  if (isQX) return $prefs.valueForKey(key);
  if (isSurge) return $persistentStore.read(key);
  if (isNode) {
    const fs = require('fs');
    try {
      const path = './.fnnasclub_store.json';
      if (! fs.existsSync(path)) return null;
      const obj = JSON. parse(fs.readFileSync(path));
      return obj[key];
    } catch (e) {
      console.error('存储读取失败:', e);
    }
  }
  return null;
};

// HTTP GET 请求
const httpGet = (url, headers = {}) => {
  if (isQX) {
    return $task.fetch({ method: 'GET', url, headers });
  } else if (isSurge) {
    return new Promise((resolve) => {
      $httpClient.get({ url, headers }, (err, resp, body) => {
        if (err) resolve({ statusCode: -1, body: '', headers:  {} });
        else resolve({ statusCode: resp.status, body, headers:  resp.headers });
      });
    });
  } else if (isNode) {
    const https = require('https');
    return new Promise((resolve) => {
      const options = new URL(url);
      options.headers = headers;
      https.get(options, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          resolve({ statusCode: res.statusCode, body: data, headers: res.headers });
        });
      }).on('error', (e) => {
        resolve({ statusCode: -1, body: '', headers: {} });
      });
    });
  }
};

// 合并 Set-Cookie
const joinCookieFromSetCookie = (setCookie) => {
  if (!setCookie) return '';
  if (Array.isArray(setCookie)) {
    return setCookie
      .map((s) => (typeof s === 'string' ? s. split(';')[0] : ''))
      .filter(Boolean)
      .join('; ');
  } else if (typeof setCookie === 'string') {
    const parts = setCookie.split(/,(? =[^;]+=)/);
    return parts.map((s) => s.split(';')[0]).filter(Boolean).join('; ');
  }
  return '';
};

// 从 HTML 中提取 sign 参数
const getSignParamFromHtml = (html) => {
  if (!html) return '';
  let m = html.match(/<a href="plugin\.php\?id=zqlj_sign&sign=([0-9a-fA-F]+)" class="btna">点击打卡<\/a>/);
  if (m && m[1]) return m[1];
  m = html.match(/<a href="plugin\.php\?id=zqlj_sign&sign=([0-9a-fA-F]+)" class="btna">今日已打卡<\/a>/);
  if (m && m[1]) return m[1];
  return '';
};

// 执行签到
const doSign = async (cookie) => {
  if (!cookie) {
    return [{ name: '签到结果', value: '签到失败，未找到 Cookie' }];
  }
  
  const headers = {
    'User-Agent': USER_AGENT,
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Referer': 'https://club.fnnas.com/portal. php',
    'Content-Type': 'text/html; charset=utf-8',
    'Cookie':  cookie,
  };

  try {
    // 获取签到页面并解析 sign 参数
    let resp = await httpGet(BASE_URL, headers);
    if (! resp || typeof resp.body === 'undefined') {
      return [{ name: '签到结果', value: '无法请求签到页面' }];
    }
    
    const html = resp.body;
    const signParam = getSignParamFromHtml(html);
    
    if (!signParam) {
      return [{ name: '签到结果', value: '签到失败，未能成功获取sign参数' }];
    }

    // 发起签到请求
    const signUrl = `${BASE_URL}&sign=${signParam}`;
    let respSign = await httpGet(signUrl, headers);
    const bodySign = respSign.body || '';
    
    if (/恭喜您，打卡成功！/.test(bodySign)) {
      return [{ name: '签到结果', value: '签到成功' }];
    } else if (/您今天已经打过卡了，请勿重复操作！/.test(bodySign)) {
      return [{ name: '签到结果', value: '您已签到，请勿重复签到' }];
    } else {
      return [{ name:  '签到结果', value:  '未知签到异常' }];
    }
  } catch (e) {
    return [{ name: '签到结果', value: `签到异常:  ${e.message}` }];
  }
};

// 获取打卡动态信息
const getInfo = async (cookie) => {
  const headers = {
    'User-Agent': USER_AGENT,
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Referer': 'https://club.fnnas.com/portal.php',
    'Content-Type':  'text/html; charset=utf-8',
    'Cookie': cookie,
  };

  try {
    let resp = await httpGet(BASE_URL, headers);
    if (!resp || typeof resp.body === 'undefined') {
      return [{ name: '获取打卡动态失败', value: '无法请求页面' }];
    }
    
    const html = resp. body;
    
    // 匹配"我的打卡动态"区块
    const m = html.match(/<strong>\s*我的打卡动态\s*<\/strong>[\s\S]*?<div[^>]*class="bm_c"[^>]*>[\s\S]*?<\/div>/);
    if (!m) throw new Error('没匹配到 "我的打卡动态" 这一段 HTML');
    
    let block = m[0];
    block = block.replace(/<\/li\s*>/gi, '</li>\n');
    
    // 去除 HTML 标签
    let text = block.replace(/<[^>]+>/g, '');
    text = text.replace('我的打卡动态', '');
    
    // 按行分割并清理
    const lines = text
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter((s) => s);

    const msg = [];
    lines.forEach((line) => {
      let sep = null;
      if (line.indexOf('：') !== -1) sep = '：';
      else if (line.indexOf(': ') !== -1) sep = ':';
      else return;
      
      const parts = line.split(sep);
      const name = parts. shift().trim();
      const value = parts.join(sep).trim();
      
      if (name && value) {
        msg.push({ name, value });
      }
    });
    
    return msg. length ?  msg : [{ name: '打卡动态', value: '未解析到内容' }];
  } catch (e) {
    return [{ name: '获取打卡动态失败', value:  e.message }];
  }
};

// 主任务（定时或手动执行签到）
const mainTask = async () => {
  const cookie = storeRead(COOKIE_KEY);
  
  if (!cookie) {
    notify('飞牛Nas论坛签到', '失败', '未检测到 Cookie，请先在浏览器打开签到页面以自动抓取 Cookie');
    return $done ?  $done() : null;
  }

  try {
    const signMsg = await doSign(cookie);
    const infoMsg = await getInfo(cookie);
    const all = signMsg.concat(infoMsg);
    const body = all.map((o) => `${o.name}:  ${o.value}`).join('\n');
    
    notify('飞牛Nas论坛签到', '执行完成', body);
  } catch (e) {
    notify('飞牛Nas论坛签到', '异常', String(e));
  }

  return $done ? $done() : null;
};

// Response header 拦截器（用于自动抓取 Cookie）
if (typeof $response !== 'undefined' && $response && $request) {
  const headers = $response.headers || {};
  const setCookie = headers['Set-Cookie'] || headers['set-cookie'] || headers['Set-cookie'] || headers['set-Cookie'];
  
  if (setCookie) {
    const cookie = joinCookieFromSetCookie(setCookie);
    if (cookie) {
      storeWrite(COOKIE_KEY, cookie);
      notify('飞牛Nas论坛', 'Cookie 已保存', cookie. substring(0, 50) + '...');
    }
  }
  
  $done && $done({});
} else if (typeof $task !== 'undefined') {
  // Quantumult X 定时任务入口
  mainTask();
} else if (isNode) {
  // Node 环境调试
  (async () => {
    await mainTask();
    process.exit(0);
  })();
} else {
  // Surge 或其他环境
  mainTask();
}
