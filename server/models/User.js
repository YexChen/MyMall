let Mongo = require('../config/db')
let Schema = Mongo.Schema
let hash = require('../config/md5')

let UserSchema = new Schema({
  userId : {type : String},
  userName : {type : String},
  userPwd : {type : String},
  orderList : {type : Array},
  cartList : {type : Array},
  addressList : {type : Array},
  token : {type : String}
})

//静态注册
UserSchema.static('regist',function(params,callback){
  this.create({'userName':params.username,'userPwd':params.password,'token':hash(params.username),'userId': parseInt(Math.random()*10000000000000000)},callback)
})

//静态登陆
UserSchema.static('login',function(params,callback){
  this.findOne({'userName':params.username,'userPwd':params.password},callback)
})

UserSchema.static('checkLogin',function(cookie,callback){
  this.findOne({'token':cookie},callback)
})

module.exports = Mongo.model('Users',UserSchema)
