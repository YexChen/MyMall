let Mongo = require('mongoose')
let config = require('./dbConfig')

Mongo.connect(config.DB_URL)

Mongo.connection.on('error',function(err){
  console.log('an error accured:'+err)
})

Mongo.connection.once('open',function(){
  console.log('db is connecting now')
})

module.exports = Mongo
