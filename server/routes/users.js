var express = require('express')
var router = express.Router()
let handler = require('./userHandler')

/* 登陆接口 */
router.post('/login', handler.login)

// 注册接口
router.post('/regist', handler.regist)

// 检测是否登录
router.get('/checkLogin',handler.checkLogin)

// 退出登录
router.get('/quitLogin',handler.quitLogin)

//加入购物车
router.post('/addToCart',handler.addToCart)

module.exports = router
