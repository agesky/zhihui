/*
[rewrite_local]
^https:\/\/wangchaoxinxi\.cn\/wechat\/i\/* url script-response-body https://raw.githubusercontent.com/agesky/zhihui/master/wangchaoxinxi.js
[mitm]
hostname = wangchaoxinxi.cn
*/


var body = $response.body;
var regex = /else if\("true" == "true"\)\s*\{\s*layer\.open\(\{[^]*?\}\);/g;
var modifiedBody = body.replace(regex, '');
$done({body: modifiedBody});