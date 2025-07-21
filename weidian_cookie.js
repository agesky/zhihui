/*
[rewrite_local]
# 微店Cookie捕获
^https?://(thor|h5)\.weidian\.com\/m\/member\-sign\-activity\/detail.html url script-request-header https://raw.githubusercontent.com/agesky/zhihui/master/weidian_cookie.js


[mitm]
# 必需的主机名
hostname = thor.weidian.com, h5.weidian.com
*/

// 功能：自动捕获并更新微店Cookie
if ($request.url.includes("weidian.com") && $request.headers.Cookie) {
    const domain = "weidian"; // 存储标识
    const currentCookie = $request.headers.Cookie;
    const storedCookie = $prefs.valueForKey(domain);
    
    // 检查Cookie是否需要更新
    if (!storedCookie || currentCookie !== storedCookie) {
        $prefs.setValueForKey(currentCookie, domain);
        $notify("微店Cookie更新", "✅ 成功获取最新Cookie", "");
    }
    console.log(`微店Cookie已${storedCookie ? "更新" : "初始化"}`);

// 临时脚本检查存储
const cookie = $prefs.valueForKey("weidian");
$notify("当前Cookie", cookie || "未获取到Cookie");


}
$done({});
