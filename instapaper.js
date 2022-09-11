/*******************************

[rewrite_local]
^https:\/\/www\.instapaper\.com\/api\/subscription_statusurl script-response-body https://raw.githubusercontent.com/agesky/zhihui/master/instapaper.js

[mitm]
hostname = www.instapaper.com

*******************************/


body = $response.body.replace(.+/g, '"ipsubnow=1588350628&ipsubexp=1800000000&ipsub=1"')

$done({body});
