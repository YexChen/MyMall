let User = require('../models/User')
let hash = require('../config/md5')

//登陆接口
exports.login = function(req,res,next){
  // @params username 用户名
  // @params password 密码
  if(!req.params.username && req.params.password){
    return res.json({
      status : '105',
      msg : '用户缺少参数，请检查！'
    })
  }
  let params = {
    username : req.body.username,
    password : req.body.password
  }
  User.login(params,(err,doc)=>{
    if(err){
      return res.json({
        status : '500',
        err
      })
    }
    if(doc != null){
      //这里种一个cookie
      res.cookie('userToken',hash(params.username),{'maxAge':3600})
      res.cookie('userId',doc.userId)
      res.cookie('userName',doc.userName)
      return res.json({
        status : '0',
        msg : '成功登陆',
        doc
      })
    }
    return res.json({
      status : '106',
      msg : '用户名或密码错误'
    })
  })
}

//注册接口
exports.regist = function(req,res,next){
  // @params username 用户名
  // @params password 密码
  if(!req.params.username && req.params.password){
    return res.json({
      status : '105',
      msg : '用户缺少参数，请检查！'
    })
  }
  let params = {
    username : req.body.username,
    password : req.body.password
  }
  User.findOne({'userName':params.username,'userPwd':params.password},function(err,doc){
    if(err){
      return res.json({
        status : '500',
        msg : '数据库查询用户表时出现问题'
      })
    }
    if(doc != null){
      return res.json({
        status : '107',
        msg : '用户名已经存在！',
        details : doc
      })
    }
    User.regist(params,(err,doc)=>{
      if(err){
        return res.json({
          status : '500',
          err
        })
      }
      return res.json({
        status : '0',
        msg : '成功注册',
        doc
      })
    })
  })
}

// 检查是否登陆
exports.checkLogin = function(req,res,next){
  // 检查参数
  if(!req.cookies.userToken){
    return res.json({
      status : '101',
      msg : '用户没有token'
    })
  }
  //数据库检测token
  User.checkLogin(req.cookies.userToken,function(err,doc){
    if(err){
      return res.json({
        status : '503',
        msg : '数据库查询token时发生错误'
      })
    }
    if(doc != null){
      return res.json({
        status : '0',
        msg : '用户token验证成功'
      })
    }
    return res.json({
      status : '107',
      msg : '用户token不合法'
    })
  })
}

// 接下来做清除登录的API
exports.quitLogin = function(req,res,next){
  //伪代码：检查参数，设置cookies的时间为-1
  res.cookie('token','',{maxAge : -1})
  res.cookie('userId','',{maxAge : -1})
  res.cookie('userName','',{maxAge : -1})
  return res.json({
    status : '0',
    msg : 'cookie成功清除'
  })
}

//接下来做加入购物车的API
//伪代码：1.获取用户ID和token，进行验证
// 2.验证结果为正确的话，就往cartList数组字段里面塞入一段商品的productID(还要改改前端，把productid绑定上去)
// 3.验证成功，返回json即可
exports.addToCart = function(req,res,next){

}
