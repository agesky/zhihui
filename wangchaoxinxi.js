/*
[rewrite_local]
^https:\/\/wangchaoxinxi\.cn\/wechat\/i\/* url script-response-body https://raw.githubusercontent.com/agesky/zhihui/master/wangchaoxinxi.js
[mitm]
hostname = wangchaoxinxi.cn
*/


var body = $response.body;
body = body.replace('else if("true" == "true"){
		layer.open({
			  title:'微信群通知',
			  type: 1,
			  content: $('#tssfPayDiv'),
			  shade: [0.6, '#393D49'],
			  anim: 6,
			  closeBtn:0,
			  area: ['90%', 'auto'],
			  zIndex:99999999
			});
	}', '');
$done({body});