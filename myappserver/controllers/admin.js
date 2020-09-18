const { model } = require("mongoose")
var UserModel = require('../models/users')

var index = async (req,res,next) =>{
    res.send({
        msg:'管理员权限',
        status:0
    })
}
var userslist = async (req,res,next) =>{
    var message = await UserModel.userslist();
    if(message){
        res.send({
            msg: '成功获取所有用户信息',
            status: 0,
            data: message
        })
    }else{
        res.send({
            msg: '未获取所有用户信息',
            status: -10,
        })
    }
}
var updateFreeze = async (req,res,next)=>{
    var {email,isFreeze} = req.body
    var message = await UserModel.updateFreeze(email,isFreeze)
    if(message){
        res.send({
            msg: '成功改变用户账号状态',
            status: 0,
            data: message
        })
    }else{
        res.send({
            msg: '未改变用户账号状态',
            status: -11,
        })
    }
}
var deleteUser = async (req,res,next)=>{
    var email = req.body.email
    var message = await UserModel.deleteUser(email)
    if(message){
        res.send({
            msg: '成功删除',
            status: 0,
            data: message
        })
    }else{
        res.send({
            msg: '删除失败’',
            status: -12,
        })
    }
}


module.exports = {
    index,
    userslist,
    updateFreeze,
    deleteUser
}
