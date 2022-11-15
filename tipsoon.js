/*
[rewrite_local]
^https?:\/\/ios\.tipsoon\.com\/\?a\=getUserInfo url script-response-body https://raw.githubusercontent.com/agesky/zhihui/master/tipsoon.js
[mitm]
hostname = ios.tipsoon.com
*/


var body = $response.body;
var obj = JSON.parse(body);



    obj.data.vip_expire_time = "2099-10-01 00:00:00";
    obj.data.is_vip = true;
    obj.data.is_red = 1;

    body = JSON.stringify(obj);


$done({body});
