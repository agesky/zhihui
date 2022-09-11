/*

[rewrite_local]
^https:\/\/www\.instapaper\.com\/api\/subscription_status url script-response-body https://raw.githubusercontent.com/agesky/zhihui/master/instapaper.js

[mitm]
hostname = www.instapaper.com

*/

/*
var body = $response.body;
var objk = JSON.parse(body);

ojbk = {
    "ipsubnow" : 1662866173,
    "ipsubexp" : 1800000000,
    "ipsub" : 1
}

body=JSON.stringify(objk);
*/


body = $response.body.replace(/.+/g, 'isVip":true')

function re() {  
var body = $response.body;  
if (arguments[0].includes("@")) {  
 var regs = arguments[0].split("@");   
var strs = arguments[1].split("@");   
for (i = 0;i    
 var reg = new RegExp(regs[i],"g");    // 另一种创建正则表达式的方式用 new RegExp构造函数   
 body = body.replace(reg, strs[i]);  } }  
else {   var reg = new RegExp(arguments[0],"g");  
 body = body.replace(reg, arguments[1]); } 
 $done(body);
} 
re('ipsubexp=@ipsub=\\d', 'ipsubexp=1746033923@ipsub=1') // 以设计让用户录入re('匹配1@匹配2@匹配3……', '替1@替2@替3……')，匹配中如果用到\d、\w等正则就以双斜杠出现。只替换一个则re('匹配1', '替1')


