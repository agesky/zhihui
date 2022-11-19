/******************************
[rewrite_local]
^https:\/\/lchttpapi\.xczim\.com\/1\.1\/(users|function) url script-response-body https://raw.githubusercontent.com/agesky/zhihui/master/xcz.js
[mitm]
hostname = lchttpapi.xczim.com
*******************************/

var body = $response.body; 
var obj = JSON.parse(body); 

obj.premiumMembership = true;
obj.lifetimeMembership = true;
obj.membership = true;
obj.coins = 999;

body = JSON.stringify(obj); 
$done(body);
