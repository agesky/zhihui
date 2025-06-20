/**
 * @fileoverview Weidian 签到脚本（从本地读取 Cookie）
 */

const url = `https://thor.weidian.com/promotion/buyer.sign.activity.sign/1.0`;
const method = `POST`;
const cookie = $persistentStore.read("weidian_cookie") || "";

if (!cookie) {
  console.log("❌ 未获取到 Cookie，请先打开 Weidian 活动页抓取 Cookie！");
  $done();
}

const headers = {
  'Sec-Fetch-Dest': 'empty',
  'Connection': 'keep-alive',
  'Accept-Encoding': 'gzip, deflate, br',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Sec-Fetch-Site': 'same-site',
  'Origin': 'https://h5.weidian.com',
  'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.54(0x18003634) NetType/4G Language/zh_CN',
  'Sec-Fetch-Mode': 'cors',
  'Cookie': cookie,
  'Host': 'thor.weidian.com',
  'Referer': 'https://h5.weidian.com/',
  'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
  'Accept': 'application/json, */*'
};

const body = `param=%7B%22activityId%22%3A%2294402141%22%2C%22shopId%22%3A%221623417096%22%2C%22signType%22%3A%22sign%22%7D&wdtoken=7286bb05`;

const myRequest = {
  url,
  method,
  headers,
  body
};

$task.fetch(myRequest).then(response => {
  const result = JSON.parse(response.body || "{}");
  if (result.success) {
    console.log("✅ 签到成功：" + (result.result?.toast || ""));
  } else {
    console.log("⚠️ 签到失败：" + (result.result?.toast || response.body));
  }
  $done();
}, error => {
  console.log("❌ 网络错误：" + error.error);
  $done();
});
