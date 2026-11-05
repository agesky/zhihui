/**
 * 学科网 (zxxk.com) 自动获取 Cookie & 定时签到脚本
 * 
 * [rewrite_local]
 * ^https:\/\/user\.zxxk\.com\/task\/(signin|user-task) url script-request-header zxxk_sign.js
 * 
 * [task_local]
 * 30 8 * * * zxxk_sign.js, tag=学科网签到, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Task.png, enabled=true
 * 
 * [mitm]
 * hostname = user.zxxk.com
 */

const cookieKey = 'zxxk_cookie_key';
const isRequest = typeof $request !== 'undefined';

if (isRequest) {
  // 1. 抓取与保存 Cookie
  getCookie();
} else {
  // 2. 定时任务执行签到
  signIn();
}

/**
 * 抓取 Cookie 逻辑
 */
function getCookie() {
  if ($request.headers && $request.headers['Cookie']) {
    const rawCookie = $request.headers['Cookie'];
    // 确保包含学科网核心登录凭证再记录
    if (rawCookie.includes('xk.passport.ticket') || rawCookie.includes('SESSION')) {
      const saveResult = $prefs.setValueForKey(rawCookie, cookieKey);
      if (saveResult) {
        $notify("学科网", "Cookie 获取成功 🎉", "已成功保存最新凭据，无需手动维护");
        console.log(`[学科网] Cookie 保存成功:\n${rawCookie}`);
      } else {
        $notify("学科网", "Cookie 获取失败 ⚠️", "保存凭据至持久化存储失败");
      }
    }
  }
  $done({});
}

/**
 * 执行自动签到
 */
function signIn() {
  const savedCookie = $prefs.valueForKey(cookieKey);

  if (!savedCookie) {
    $notify("学科网签到", "签到未执行 ❌", "未检测到已保存的 Cookie，请先在浏览器/APP访问一次学科网个人任务中心");
    $done();
    return;
  }

  const timestamp = Date.now();
  const req = {
    url: `https://user.zxxk.com/task/signin?_=${timestamp}`,
    method: 'GET',
    headers: {
      'Host': 'user.zxxk.com',
      'Accept': 'application/json, text/javascript, */*; q=0.01',
      'X-Requested-With': 'XMLHttpRequest',
      'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
      'Sec-Fetch-Mode': 'cors',
      'Connection': 'keep-alive',
      'Referer': 'https://user.zxxk.com/task/user-task',
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-Dest': 'empty',
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) EdgiOS/156.0.4314.56 Version/18.0 Mobile/15E148 Safari/604.1',
      'Cookie': savedCookie
    }
  };

  $task.fetch(req).then(
    response => {
      console.log(`[学科网签到状态]: ${response.statusCode}`);
      console.log(`[学科网响应结果]: ${response.body}`);
      
      try {
        const res = JSON.parse(response.body);
        const msg = res.msg || res.message || res.info || "签到接口已响应";
        const code = res.code !== undefined ? res.code : response.statusCode;
        $notify("学科网签到", `状态码: ${code}`, `结果: ${msg}`);
      } catch (e) {
        $notify("学科网签到", "已完成", response.body.slice(0, 100));
      }
      $done();
    },
    reason => {
      $notify("学科网签到", "请求异常 ❌", `网络或接口错误: ${reason.error}`);
      console.log(`[学科网签到失败]: ${reason.error}`);
      $done();
    }
  );
}
