var express = require('express')
var router = express.Router()
let handler = require('./userHandler')

/* 登陆接口 */
router.post('/login', handler.login)

// 注册接口
router.post('/regist', handler.regist)

// 检测是否登录
router.get('/checkLogin',handler.checkLogin)

module.exports = router
