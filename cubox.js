/*
[rewrite_local]
^https?:\/\/cubox\/c\/api\/userInfo url script-response-body https://raw.githubusercontent.com/agesky/zhihui/master/cubox.js
[mitm]
hostname = cubox.pro
*/


var body = $response.body;
var reg1 = /isExpire":\w+/g;
var reg2 = /expireTime":\W+/g;
body = body.replace(reg1, 'isExpire":false');
#body = body.replace(reg2, 'expireTime":"2022-09-29T19:57:33+08:00');
body = body.replace(reg2, 'expireTime": 1694525860');

$done(body);
