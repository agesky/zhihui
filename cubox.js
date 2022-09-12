/*
[rewrite_local]
^https:\/\/www\.instapaper\.com\/api\/subscription_status url script-response-body https://raw.githubusercontent.com/agesky/zhihui/master/instapaper.js
[mitm]
hostname = www.instapaper.com
*/


var body = $response.body;
var reg1 = /isExpire" : \w+/g;
var reg2 = /expireTime" : \d+/g;
body = body.replace(reg1, 'isExpire" : false');
body = body.replace(reg2, 'expireTime" : "2032-09-19T19:57:33+08:00');
$done(body);
