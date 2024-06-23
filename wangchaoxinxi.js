var body = $response.body;
body = body.replace('</body>', '<script>document.getElementById("tssfPayDiv").style.display = "none";</script></body>');
$done({body});