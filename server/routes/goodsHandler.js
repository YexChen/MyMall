let Goods = require('../models/Goods')

exports.getList = function(req,res,next){
  //得到商品列表
  //获取的参数
  // @params page 页数
  // @params pageSize 一页有多少
  // @params priceLevel 价格等级 0,1,2,3对应 priceItem
  // @params sort 升降序
  // @params skip 跳过多少条
  // @params params 查询时候的过滤参数
  let page = parseInt(req.param('page',1))
  let pageSize = parseInt(req.param('pageSize',8))
  let priceLevel = req.param('priceLevel','all')
  //-1降序，1升序
  let sort  = req.param('sort',-1)
  let skip = (page-1)*pageSize
  let params = {}
  let priceLevelLimit = ['all','0','1','2','3']
  if(!priceLevelLimit.includes(priceLevel)){
    priceLevel = 'all'
  }
  console.log(typeof priceLevel)
  if(priceLevel != 'all'){
    let priceItem = [[0,100],[100,500],[500,1000],[1000,5000]]
    params = {
      salePrice : {
        $gt:priceItem[priceLevel][0],
        $lt:priceItem[priceLevel][1]
      }
    }
  }
  Goods.find(params)
    .sort({'salePrice':sort})
    .skip(skip)
    .limit(pageSize)
    .exec((err,doc)=>{
      if(err){
        return res.json({
          status : '1',
          msg : err.message
        })
      }
      return res.json({
        status : '0',
        msg : '',
        result : {
          count : doc.length,
          list : doc
        }
      })
    })
}
