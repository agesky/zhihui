/**
 * @fileoverview Weidian Cookie 获取脚本
 */

if ($request.headers["Cookie"]) {
  const cookie = $request.headers["Cookie"];
  $persistentStore.write(cookie, "weidian_cookie");
  console.log("✅ Weidian Cookie 获取成功并保存！");
} else {
  console.log("⚠️ 未捕获到 Cookie！");
}
$done({});
