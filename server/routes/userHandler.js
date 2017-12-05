let User = require('../models/User')
let hash = require('../config/md5')

//登陆接口
exports.login = function(req,res,next){
  // @params username 用户名
  // @params password 密码
  if(!req.params.username && req.params.password){
    return res.json({
      status : 105,
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
        status : 500,
        err
      })
    }
    if(doc != null){
      //这里种一个cookie
      res.cookie('userToken',hash(params.username),{'maxAge':3600})
      res.cookie('userId',doc.userId)
      return res.json({
        status : 0,
        msg : '成功登陆',
        doc
      })
    }
    return res.json({
      status : 106,
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
      status : 105,
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
        status : 500,
        msg : '数据库查询用户表时出现问题'
      })
    }
    if(doc != null){
      return res.json({
        status : 107,
        msg : '用户名已经存在！',
        details : doc
      })
    }
    User.regist(params,(err,doc)=>{
      if(err){
        return res.json({
          status : 500,
          err
        })
      }
      return res.json({
        status : 0,
        msg : '成功注册',
        doc
      })
    })
  })
}

exports.checkLogin = function(req,res,next){
  // 检查参数
  if(!req.cookies.userToken){
    return res.json({
      status : 101,
      msg : '用户没有token'
    })
  }
  //数据库检测token
  User.checkLogin(req.cookies.userToken,function(err,doc){
    if(err){
      return res.json({
        status : 503,
        msg : '数据库查询token时发生错误'
      })
    }
    if(doc != null){
      return res.json({
        status : 0,
        msg : '用户token验证成功'
      })
    }
    return res.json({
      status : 107,
      msg : '用户token不合法'
    })
  })
}
