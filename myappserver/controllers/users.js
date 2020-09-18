var {Email, Head} = require('../untils/config')
var UserModel = require('../models/users')
var { setCryto,getCaptcha } = require('../untils/base')
var fs = require('fs');
var url = require('url');

var login = async function(req,res,next){
    var username = req.body.username;
    var password = req.body.password;
    var verify = req.body.verify
    var result = await UserModel.findlogin({
        username,
        password: setCryto(password)
    });
    if(verify !== req.session.verify){
        res.send({
            msg:'验证码错误',
            status: -14
        })
        return
    }
    // 判断账号是否被冻结
    if(result){
        console.log(result)
        req.session.username = username
        req.session.isAdmin = result.isAdmin
        req.session.userHead = result.userHead
        req.session.nickname = result.nickname
        req.session.birthdate = result.birthdate
        req.session.sex = result.sex
        // 如果id要存储到session里面的话，一定不能用req.session.id表示，不然取出来的数据会变成乱码，    
        req.session.id1 = parseInt(result.id)
        console.log(result.id)
        if(result.isFreeze){
            res.send({
                msg:'账号已被冻结',
                status: -12
            })
        }else{
            res.send({
                msg:'登录成功',
                status: 0
            })
        }
    }else{
        res.send({
            msg:'登录失败',
            status: -5
        })
    }
};

var register = async function(req,res,next){
    var {username,password,password1,email,verify} = req.body;
    console.log({username,password,password1,email,verify})
    if(password !== password1 ){
        res.send({
            msg:'两次密码输入不一致',
            status: -2
        });
        return
    }
    if(email !== req.session.email && verify !== req.session.verify){
        res.send({
            msg:'验证码错误',
            status: -3
        });
        return
    }
    if((Date.now() - req.session.time)/1000 >60){
        res.send({
            msg:'验证码已过期，请重新发送',
            status: -13
        });
        return
    }
    var result = await UserModel.save({
        username:username,
        password:setCryto(password),
        email:email,
        nickname: username
    })
    if(result){
        res.send({
            msg:'注册成功',
            status:0
        });
    }else{
        res.send({
            msg:'注册失败',
            status: -4
        })
    }
};

var logout = async function(req,res,next){
    req.session.username = ''
    req.session.isAdmin = ''
    req.session.userHead = ''
    req.session.nickname = ''
    req.session.birthdate = ''
    req.session.sex = ''
    req.session.id1 = ''
    res.send({
		msg : '退出成功',
		status : 0
	});
};

var verify = async function(req,res,next){
    var email = req.query.email;// 获取当前页面填写的email邮箱地址
    var verify = Email.verify//获取发送的验证码
    var yanzheng = await UserModel.isVerify(email)
    console.log(yanzheng)
    if(yanzheng.length > 0 ){
        res.send({
            msg:'该邮件地址已注册',
            status: -1
        });
        return
    }
    //将注册发送的验证码和注册的邮箱存储到session中，方便注册的时候进行数据验证
    req.session.email = email;
    req.session.verify = verify;
    req.session.time = Email.registerTime// 验证码发送时候的毫秒数

    console.log(email)
    var mailOptions = {
        from: '沈安的app shenan1314@qq.com', // sender address
        to: email, // list of receivers
        subject: "沈安app邮箱验证码", // Subject line
        text:"注册验证码" + verify  // plain text body
    };
    console.log(mailOptions)
    Email.transporter.sendMail(mailOptions,(err)=>{
        if(err){
            res.send({
                msg:'验证码发送失败',
                status: -1
            });
        }else{
            res.send({
                msg: "验证码发送成功",
                status: 0
            });
        }
    });
    // res.send('11')
};

var getUser = async function(req,res,next){
    if(req.session.username){
        var getuser = await UserModel.getUser(req.session.username)
        res.send({
            msg:'获取用户信息成功',
            status:0,
            user: getuser
        })
        console.log(req.session.id1)
    }else{
        res.send({
            msg:'获取用户信息失败',
            status:-6
        })
    }
};

var findPassword = async function(req,res,next){
    var {email,password,verify} = req.body;
    console.log(req.session.verify)
    var findPassword = await UserModel.updatePassword(email,setCryto(password))
    if(email === req.session.email && verify === req.session.verify){
        if(findPassword){
            res.send({
                msg:'修改成功',
                status:0
            })
        }else{
            res.send({
                msg:'修改失败',
                status:-8
            })
        }
    }else{
        res.send({
            msg:'验证码错误',
            status:-7
        })
    }
};
// 获取验证码
var getCaptcha1 = async (req,res,next)=>{
    var result =await getCaptcha(req, res);
    if(result){
        res.send(result)
    }
}
// 处理用户上传的头像
var uploadUserHead = async (req,res,next) =>{
    console.log(req.file)
    await fs.rename( 'public/uploads/' + req.file.filename , 'public/uploads/' + req.session.username + '.jpg' , ()=>{} );
    var result = await UserModel.updateUserHead( req.session.username , url.resolve(Head.baseUrl , req.session.username + '.jpg' ) );
    if(result){
        res.send({
            msg: '头像修改成功',
            status: 0,
			userHead : url.resolve(Head.baseUrl , req.session.username + '.jpg' )
        })
    }else{
        res.send({
            msg: '头像修改失败',
            status: -15
        })
    }
}
// 修改用户昵称
var updateNickname = async (req,res,next)=>{
    var {username,nickname} = req.body;
    console.log({username,nickname})
    var updateNickname = await UserModel.updateNickname(username,nickname)
        if(updateNickname){
            res.send({
                msg:'修改成功',
                status:0,
                nickname: nickname
            })
        }else{
            res.send({
                msg:'修改失败',
                status:-8
            })
        }
}
// 修改用户性别
var updateSex = async (req,res,next)=>{
    var {username,sex} = req.body;
    var updateSex = await UserModel.updateSex(username,sex)
        if(updateSex){
            res.send({
                msg:'修改成功',
                status:0,
            })
        }else{
            res.send({
                msg:'修改失败',
                status:-8
            })
        }
}
// 修改用户出生日期
var updateBirthdate = async (req,res,next)=>{
    var {username,birthdate} = req.body;
    req.session.birthdate = birthdate
    var updateBirthdate = await UserModel.updateBirthdate(username,birthdate)
        if(updateBirthdate){
            res.send({
                msg:'修改成功',
                status:0,
                birthdate: birthdate
            })
        }else{
            res.send({
                msg:'修改失败',
                status:-8
            })
        }
}

module.exports = {
    login,
    register,
    logout,
    verify,
    getUser,
    findPassword,
    getCaptcha1,
    uploadUserHead,
    updateNickname,
    updateSex,
    updateBirthdate
}