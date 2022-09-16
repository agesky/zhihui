/*
[rewrite_local]
^https://srmapp.com/purchases/validate* url script-response-body https://raw.githubusercontent.com/agesky/zhihui/master/termuxl.js
[mitm]
hostname = srmapp.com
*/

var objc = JSON.parse($response.body);

    objc = 
{
"status":"VALID"
｝

$done({body : JSON.stringify(objc)});
