/*
[rewrite_local]
^http?:\/\/i.815616\.xyz\/api\/v2\/myinfo\/* url script-response-body https://raw.githubusercontent.com/agesky/zhihui/master/shanqiu.js
[mitm]
hostname = 815616.xyz
*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);




{
    obj.data.level = 1;
    obj.data.expireTime = "2099-09-12T23:50:23+08:00";
    obj.data.isExpire = false;
    obj.data.active = true;
    obj.data.payTime = 1660006006;

	body = JSON.stringify(obj);
}
{
  "status" : "1",
  "data" : [
    {
      "uuid" : "64b42c998",
      "banned" : "0",
      "headimgurl" : null,
      "type" : "1",
      "wxunionid" : null,
      "token" : "00000000",
      "vipto" : "2023-05-31 10:50:16",
      "wxopenid" : null,
      "nickname" : null,
      "email" : null,
      "appleid" : null,
      "device" : null
    }
  ],
  "seconds" : 0.001
}

$done({body});
