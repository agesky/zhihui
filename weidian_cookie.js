/**
 * @fileoverview Weidian Cookie 获取脚本
 */
/*
[rewrite_local]
^https:\/\/thor\.weidian\.com\/promotion\/buyer\.sign\.activity\.info\/1\.0 script-request-header https://raw.githubusercontent.com/agesky/zhihui/master/weidian_cookie.js
[mitm]
hostname = *.weidian.com
*/

if ($request.headers["Cookie"]) {
  const cookie = $request.headers["Cookie"];
  $persistentStore.write(cookie, "weidian_cookie");
  console.log("✅ Weidian Cookie 获取成功并保存！");
} else {
  console.log("⚠️ 未捕获到 Cookie！");
}
$done({});
