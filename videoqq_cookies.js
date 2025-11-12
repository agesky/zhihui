/*
[rewrite_local]
# 腾讯视频 cookie1
^https?:\/\/vip.video.qq.com/rpc/trpc.query_vipinfo.vipinfo.QueryVipInfo/GetVipUserInfoH5? url script-request-header https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/Task/videoqq.js

[mitm]
# 必需的主机名
hostname = vip.video.qq.com
*/