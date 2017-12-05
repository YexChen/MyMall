var express = require('express')
var router = express.Router()
let goodsHandler = require('./goodsHandler')

// 获取首页商品列表
router.get('/getList',goodsHandler.getList)
module.exports = router
