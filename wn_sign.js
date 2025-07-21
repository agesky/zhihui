# -*- coding: utf-8 -*-
"""
Quantumult X 脚本：网易蜗牛读书自动签到
功能：自动获取 Cookie、提取 _xsrf 并完成每日签到
触发条件：访问 du.163.com 登录接口时触发
使用步骤：
1. 将脚本保存至 Quantumult X/Scripts/ 目录（如 wn_sign.js）
2. 配置重写规则：^https?://du\.163\.com/login/token url script-request-header wn_sign.js
3. 确保 MITM 主机名包含 du.163.com
"""

/*
[rewrite_local]
^https?://du\.163\.com\/login\/token url script-request-header https://raw.githubusercontent.com/agesky/zhihui/master/wn_sign.js


[mitm]
hostname = du.163.com
*/


const DOMAIN = "wn_reader";  // 存储标识

// 主逻辑：处理请求并存储 Cookie 及 XSRF
if ($request.url.includes("du.163.com/login/token") && $request.headers) {
    const cookie = $request.headers.Cookie || $request.headers.cookie;
    if (cookie) {
        // 存储完整 Cookie
        $prefs.setValueForKey(cookie, DOMAIN);
        
        // 提取并存储 _xsrf
        const xsrf = extractXSRF(cookie);
        if (xsrf) {
            $prefs.setValueForKey(xsrf, `${DOMAIN}_xsrf`);
            $notify("网易读书更新", "✅ Cookie & XSRF 已存储", `XSRF: ${xsrf}`);
        } else {
            $notify("网易读书更新", "⚠️ Cookie 已存储", "未提取到 _xsrf 字段");
        }
    }
    $done({});
}

// 独立运行签到逻辑（需定时触发）
if (typeof $argument !== "undefined" && $argument === "sign") {
    const cookie = $prefs.valueForKey(DOMAIN);
    const xsrf = $prefs.valueForKey(`${DOMAIN}_xsrf`);
    
    if (!cookie || !xsrf) {
        $notify("❌ 签到失败", "缺少 Cookie 或 XSRF 参数");
        $done();
    }

    // 构造签到请求
    const url = "https://du.163.com/activity/202506/activityCenter/sign.json";
    const headers = {
        "Cookie": cookie,
        "X-XSRFToken": xsrf,
        "User-Agent": "NeteaseSnailReader/1.9.14"
    };
    const body = { "csrfToken": xsrf };

    $task.fetch({
        method: "POST",
        url: url,
        headers: headers,
        body: JSON.stringify(body)
    }).then(response => {
        const result = JSON.parse(response.body);
        if (result.code === 0) {
            $notify("✅ 签到成功", `连续签到 ${result.continuousSignedDays} 天`);
        } else {
            $notify("❌ 签到失败", result.msg || "未知错误");
        }
        $done();
    }, reason => {
        $notify("⚠️ 请求异常", reason.error);
        $done();
    });
}

// 工具函数：从 Cookie 提取 _xsrf
function extractXSRF(cookieStr) {
    if (!cookieStr) return null;
    const cookies = cookieStr.split('; ');
    for (const item of cookies) {
        if (item.trim().startsWith('_xsrf=')) {
            return item.split('=')[1].trim();
        }
    }
    return null;
}
