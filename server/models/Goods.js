let Mongo = require('../config/db')
let Schema = Mongo.Schema

let goodsSchema = new Schema({
  productId : {type : String},
  productName : {type : String},
  salePrice : {type : Number},
  productImage : {type : String},
  productionUrl : {type : String}
})

module.exports = Mongo.model('Goods',goodsSchema)
