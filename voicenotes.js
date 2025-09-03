/*

[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-response-body https://raw.githubusercontent.com/agesky/zhihui/master/voicenotes.js
^https:\/\/api\.voicenotes\.com\/api\/auth\/ url script-response-body https://raw.githubusercontent.com/agesky/zhihui/master/voicenotes.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers) url script-request-header https://raw.githubusercontent.com/ddgksf2013/Scripts/master/deleteHeader.js

[mitm]
hostname = api.revenuecat.com， api.voicenotes.com
*/

/*
Quantumult X / Surge / Loon 通用多接口 JSON 修改脚本
用途：拦截多个 API 的返回值，根据 hostname 和路径决定如何修改字段
注意：仅供学习 JSON 修改与调试 UI 使用，请勿用于绕过付费
*/

let body = $response.body;
let obj = JSON.parse(body);

// 获取请求的 URL
let url = $request.url;

// === 针对 RevenueCat ===
if (url.includes("api.revenuecat.com/v1/subscribers")) {
  // 示例：把订阅过期时间改成未来
  if (obj.subscriber?.subscriptions?.["pro_annual_sub_p1a7"]) {
    obj.subscriber.subscriptions["pro_annual_sub_p1a7"].expires_date = "2099-12-31T23:59:59Z";
  }
  if (obj.subscriber?.entitlements?.["Believer"]) {
    obj.subscriber.entitlements["Believer"].expires_date = "2099-12-31T23:59:59Z";
  }
}

// === 针对 VoiceNotes ===
else if (url.includes("api.voicenotes.com/api/auth/me")) {
  obj.subscription_plan = "pro";               // 原本可能是 null / Free Trial
  obj.subscription_status = true;                    // 修改为 true
  obj.subscription_created_at = "2025-08-30T13:06:57.000000Z";
  obj.subscription_gateway = "revenuecat";
}

// === 针对 VoiceNotes ===
else if (url.includes("api.voicenotes.com/api/auth/details")) {
  obj.usage.subscription_plan = "pro";               // 原本可能是 null / Free Trial
  obj.usage.subscription_status = true;                    // 修改为 true
}

// 输出修改后的响应
body = JSON.stringify(obj);
$done({ body });
