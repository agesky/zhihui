/******************************
[rewrite_local]
^https:\/\/lchttpapi\.xczim\.com\/1\.1\/(users|function) url script-response-body https://raw.githubusercontent.com/agesky/zhihui/master/xcz.js
[mitm]
hostname = lchttpapi.xczim.com
*******************************/

var body = $response.body; 

var reg1 = /premiumMembership\":false/g
var reg2 = /lifetimeMembership\":false/g
var reg3 = /membership\":false/g
var reg4 = /coins\":\d+/g
var reg5 = /result\":false/g

body = body.replace(reg1, 'premiumMembership" : true');
body = body.replace(reg2, 'lifetimeMembership" : true');
body = body.replace(reg3, 'membership" : true');
body = body.replace(reg4, 'coins" : 999');
body = body.replace(reg5, 'result" : true');

body = JSON.stringify(obj); 
$done(body);
