const crypto = require('crypto');
var captcha = require('trek-captcha');

var setCryto = (data) => {
    return crypto.createHmac('sha256', '^$$#*&$%#^$^&%')// 加密的方式
                    .update(data)// 加密的对象
                    .digest('hex');// 加密后显示的形式
}

// 获取验证码
var getCaptcha =(req,res)=>{
    return captcha().then((data)=>{
        req.session.verify = data.token;// 将验证码文本存入session中
        return data.buffer // 返回验证码的2进制编码
    }).catch(()=>{
        return false
    })
}
module.exports = {
    setCryto,
    getCaptcha
}