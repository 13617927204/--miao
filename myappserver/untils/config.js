const mongoose = require('mongoose')
const nodemailer = require('nodemailer')

const Mongoose = {
    url: ' mongodb://127.0.0.1:27017/myapp',
    connect(){
        mongoose.connect(this.url , {useUnifiedTopology: true,useNewUrlParser: true  }, (err)=>{
            if(err){
                console.log('数据库连接失败')
            }else{
                console.log('数据库连接成功')
            }
        })
    }
};

const Email = {
    config: {
        host: "smtp.qq.com",
        port: 587,
        auth: {
        user: '1507203818@qq.com', // generated ethereal user
        pass: 'gsbtjeigjiqahdch', // generated ethereal password
        },
    },
    get transporter(){
        return  nodemailer.createTransport(this.config);
    },
    get verify(){ // 随机生成验证码
        // return Math.random().toString().substring(2,6);
                    var arr = [];
                    for (i = 0; i < 6; i++) {
                        var a = parseInt(Math.random() * 123);
                        if (0 <= a && a <= 9) {
                            arr.push(a);
                        } else if (96 < a && a < 123) {
                            arr.push(String.fromCharCode(a));
                        } else {
                            i--;
                        }
                    }
                    return arr.join('');
    },
    get registerTime(){
        return Date.now();
    }
}

var Head = {
	baseUrl : 'http://localhost:3000/uploads/'
}

module.exports = {
    Mongoose,
    Email,
    Head
}