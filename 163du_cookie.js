/*
[rewrite_local]
# 网易读书Cookie捕获
^https?://du\.163\.com\/login\/token url script-request-header https://raw.githubusercontent.com/agesky/zhihui/master/163du_cookie.js


[mitm]
# 必需的主机名
hostname = du.163.com
*/

// 功能：自动捕获并更新网易读书cookie
const domain = "163du";

// 1. 检查并更新 Cookie
if ($request.url.includes("du.163.com") && $request.headers) {
    const currentCookie = $request.headers.Cookie || $request.headers.cookie;
    const storedCookie = $prefs.valueForKey(domain);
    
    if (currentCookie && (!storedCookie || currentCookie !== storedCookie)) {
        $prefs.setValueForKey(currentCookie, domain);
        // 2. 立即提取并存储 XSRF
        const xsrfValue = getXSRF(currentCookie);
        if (xsrfValue) {
            $prefs.setValueForKey(xsrfValue, domain + "_xsrf");
            $notify("网易读书更新", "✅ Cookie & XSRF 已更新", `XSRF: ${xsrfValue}`);
        } else {
            $notify("网易读书更新", "✅ Cookie 已更新", "⚠️ 未提取到 XSRF");
        }
    }
}

// 3. XSRF 提取函数
function getXSRF(cookieStr) {
    if (!cookieStr) return null;
    const cookies = cookieStr.split('; ');
    for (const cookie of cookies) {
        if (cookie.trim().startsWith('_xsrf=')) {
            return cookie.split('=')[1].trim();
        }
    }
    return null;
}

$done({});

