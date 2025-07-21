/*
[rewrite_local]
# 网易读书Cookie捕获
^https?://du\.163\.com\/activity\/201907\activityCenter\/sign.json url script-request-header https://raw.githubusercontent.com/agesky/zhihui/master/163du_cookie.js


[mitm]
# 必需的主机名
hostname = du.163.com
*/

// 功能：自动捕获并更新网易读书Cookie
if ($request.url.includes("du.163.com") && $request.headers.Cookie) {
    const domain = "163du"; // 存储标识
    const currentCookie = $request.headers.Cookie;
    const storedCookie = $prefs.valueForKey(domain);
    
    // 检查Cookie是否需要更新
    if (!storedCookie || currentCookie !== storedCookie) {
        $prefs.setValueForKey(currentCookie, domain);
        $notify("网易读书Cookie更新", "✅ 成功获取最新Cookie", "");
    }
    console.log(`网易读书Cookie已${storedCookie ? "更新" : "初始化"}`);

// 临时脚本检查存储
const cookie = $prefs.valueForKey("163du");
$notify("当前Cookie", cookie || "未获取到Cookie");


}
$done({});
