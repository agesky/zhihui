/*
[rewrite_local]
^http?:\/\/i.815616\.xyz\/api\/v2\/myinfo\/* url script-response-body https://raw.githubusercontent.com/agesky/zhihui/master/shanqiu.js
[mitm]
hostname = 815616.xyz
*/


var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "status" : "1",
  "data" : [
    {
      "uuid" : "64b42c998",
      "banned" : "0",
      "headimgurl" : null,
      "type" : "2",
      "wxunionid" : null,
      "token" : "00000000",
      "vipto" : "2025-05-31 10:50:16",
      "wxopenid" : null,
      "nickname" : null,
      "email" : null,
      "appleid" : null,
      "device" : null
    }
  ],
  "seconds" : 0.001
}

$done({body:JSON.stringify(obj)});
