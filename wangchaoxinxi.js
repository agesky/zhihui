/*
[rewrite_local]
^https:\/\/wangchaoxinxi\.cn\/wechat\/i\/* url script-response-body https://raw.githubusercontent.com/agesky/zhihui/master/wangchaoxinxi.js
[mitm]
hostname = wangchaoxinxi.cn
*/


var body = $response.body;
body = body.replace('</body>', '<script>document.getElementById("tssfPayDiv").style.display = "none";</script></body>');
$done({body});