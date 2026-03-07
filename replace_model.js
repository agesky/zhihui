let body = $request.body;

if (body) {
    try {
        let obj = JSON.parse(body);
        
        // 只要请求里包含模型字段，就强制替换为 gpt-5.4
        if (obj.model) {
            obj.model = "gpt-5.4"; 
            body = JSON.stringify(obj);
        }
    } catch (e) {
        console.log("解析请求失败: " + e);
    }
}

// 将修改后的数据包交还给系统发出
$done({body: body});
