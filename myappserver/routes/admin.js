var express = require('express');
var adminControllers = require('../controllers/admin.js');
var router = express.Router();

// 进行判断，是否是管理员访问本接口
router.use((req,res,next)=>{
    console.log(req.session.isAdmin)
    console.log(req.session.username)
    if(req.session.username && req.session.isAdmin){
        next();
    }else{
        res.send({
            msg: '没有管理员权限',
            status: -9
        })
    }
})


/* GET users listing. */
router.get('/', adminControllers.index);
router.get('/finduserslist', adminControllers.userslist);
router.post('/updateFreeze', adminControllers.updateFreeze)
router.post('/deleteUser', adminControllers.deleteUser)



module.exports = router;