/*
[rewrite_local]
^https?:\/\/*\.tipsoon\.com\/\?a\=getUserInfo* url script-response-body https://raw.githubusercontent.com/agesky/zhihui/master/tipsoon.js
[mitm]
hostname = tipsoon.com
*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = 'c=api4';


if (url.indexOf(vip) != -1) {
    obj.data.Vip_expire_time = "2099-10-01 00:00:00";
    obj.data.is_vip = 1;


	body = JSON.stringify(obj);
}


$done({body});
