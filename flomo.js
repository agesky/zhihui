/*
[rewrite_local]
^https?:\/\/flomoapp\.com\/api\/v1\/user\/me url script-response-body https://raw.githubusercontent.com/agesky/zhihui/master/flomo.js
[mitm]
hostname = flomoapp.com
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = 'api_key=flomoapp_ios';


if (url.indexOf(vip) != -1) {
    obj.data.pro_expired_at = "2099-10-01 00:00:00";



	body = JSON.stringify(obj);
}


$done({body});
