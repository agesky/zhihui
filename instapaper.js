/*

[rewrite_local]
^https:\/\/www\.instapaper\.com\/api\/subscription_status url script-response-body https://raw.githubusercontent.com/agesky/zhihui/master/instapaper.js

[mitm]
hostname = www.instapaper.com

*/


var body = $response.body;
var reg1 = /ipsubexp=/g;
var reg2 = /ipsub=\d/g;
body = body.replace(reg1, 'ipsubexp=1646033923');
body = body.replace(reg2, 'ipsub=1');
$done(body);
