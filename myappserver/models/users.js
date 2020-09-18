var mongoose = require('mongoose')
var  { Head } = require('../untils/config.js');
var url = require('url');

mongoose.set('useCreateIndex', true);//设置唯一值

var UserSchema = new mongoose.Schema({
    id:{// 以注册的时间戳作为唯一的id
        type:String,
        default: new Date().getTime()//默认值为当前时间毫秒数
    },
    username:{
        type: String,
        required:true,//不能为空
        index:{unique:true}//唯一值
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        index:{unique:true}//唯一值
    },
    time:{
        type:Date,
        default:Date.now()
    },
    isAdmin:{// 是否是管理员
        type: Boolean,
        default:false
    },
    isFreeze: {// 账号是否被冻结
        type: Boolean,
        default:false
    },
    userHead:{// 用户头像
        type: String,
        default: url.resolve(Head.baseUrl , 'default.jpg')
    },
    birthdate: {
        type: String,
        default: ''
    },
    sex: {
        type: String,
        default: ''
    },
    nickname: {
        type: String,
        default: '',
        index:{unique:true}//唯一值
    }
})
var UserModel = mongoose.model('users',UserSchema);
UserModel.createIndexes();//设置唯一值
var save = (data)=>{
    var user = new UserModel(data);
    return user.save().then(()=>{
        return true //添加成功，返回true
    }).catch(()=>{
        return false//添加失败，返回false
    })
}
var findlogin = (data)=>{
    return UserModel.findOne(data);
}
var updatePassword = (email,password)=>{
    return UserModel.updateOne({email:email},{$set:{password:password}}).then(()=>{
        return true
    }).catch(()=>{
        return false
    })
}
// 获取指定用户信息
var getUser = (username)=> {
    return UserModel.find({username: username})
}
// 获取所以用户信息
var userslist = () =>{
    return UserModel.find()
}
// 判断邮件地址是否是注册
var isVerify = (email) => {
    return UserModel.find({email: email})
}
// 冻结或解冻用户账号
var updateFreeze = (email, isFreeze)=>{
    return UserModel.updateOne({email: email}, {$set:{isFreeze: isFreeze}}).then(()=>{
        return true
    }).catch(()=>{
        return false
    })
}
// 删除用户账号
var deleteUser = (email)=>{
    return UserModel.deleteOne({ email })
}
// 修改用户头像
var updateUserHead = (username, userHead)=>{
    return UserModel.updateOne({username: username}, {$set:{userHead: userHead}}).then(()=>{
        return true
    }).catch(()=>{
        return false
    })
}
// 修改用户昵称
var updateNickname = (username, nickname)=>{
    return UserModel.updateOne({username: username}, {$set:{nickname: nickname}}).then(()=>{
        return true
    }).catch(()=>{
        return false
    })
}
// 修改用户性别
var updateSex = (username, sex)=>{
    return UserModel.updateOne({username: username}, {$set:{sex: sex}}).then(()=>{
        return true
    }).catch(()=>{
        return false
    })
}
// 修改用户出生日期
var updateBirthdate = (username, birthdate)=>{
    return UserModel.updateOne({username: username}, {$set:{birthdate: birthdate}}).then(()=>{
        return true
    }).catch(()=>{
        return false
    })
}
module.exports = {
    save,
    findlogin,
    updatePassword,
    userslist,
    updateFreeze,
    deleteUser,
    updateUserHead,
    updateNickname,
    updateSex,
    updateBirthdate,
    isVerify,
    getUser
}