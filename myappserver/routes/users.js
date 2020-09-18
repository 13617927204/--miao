var express = require('express');
var usersControllers = require('../controllers/users.js');
var router = express.Router();
var multer = require('multer')
var upload = multer({dest: 'public/uploads/'})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',usersControllers.login)
router.post('/register',usersControllers.register)
router.get('/logout',usersControllers.logout)
router.get('/verify',usersControllers.verify)
router.get('/getUser',usersControllers.getUser)
router.post('/findPassword',usersControllers.findPassword)
router.get('/getCaptcha', usersControllers.getCaptcha1)
//上传头像接口
router.post('/uploadUserHead',upload.single('file'), usersControllers.uploadUserHead)

router.post('/updateNickname',usersControllers.updateNickname)
router.post('/updateSex',usersControllers.updateSex)
router.post('/updateBirthdate',usersControllers.updateBirthdate)

module.exports = router;
