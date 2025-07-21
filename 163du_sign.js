
// 获取xsrf值
const xsrf = $prefs.valueForKey("163du_xsrf");
if (!xsrf) {
    $notify("❌ 签到失败", "缺少 XSRF Token");
    $done();
}
const url = `https://du.163.com/activity/201907/activityCenter/sign.json`;
const method = `POST`;
const headers = {
'Sec-Fetch-Dest' : `empty`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Sec-Fetch-Site' : `same-origin`,
'Origin' : `https://du.163.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 NEJSBridge/2.0 NeteaseSnailReader/1.9.89 NetType/WIFI (63bdd83f476d209119126c189ab97dae;appstore)`,
'Sec-Fetch-Mode' : `cors`,
'Cookie' :  $prefs.valueForKey("163du") || "",
'Host' : `du.163.com`,
'Referer' : `https://du.163.com/fe/client/welfare-exchange/dist/index.html`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Accept' : `application/json, text/plain, */*`
};
const body = `csrfToken=`& xsrf;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
