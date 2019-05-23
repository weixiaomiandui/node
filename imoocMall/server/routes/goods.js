var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');


mongoose.connect('mongodb://127.0.0.1:27017/dumalllist')
mongoose.connection.on("connected",function(){
  console.log('connect success')
})
mongoose.connection.on("error",function(){
  console.log('connect fail')
})
mongoose.connection.on("disconnected",function(){
  console.log('connect disconnected')
})

//查询商品
router.get("/",function(req,res,next){
  let page = parseInt(req.param("page"))
  let pageSize = parseInt(req.param("pageSize"))
  let priceLevel = req.param("priceLevel")
  let sort = req.param("sort");
  let skip = (page-1)*pageSize;
  var priceGt = '',pricelte = '';
  let params = {}
  if(priceLevel != 'all'){
    switch (priceLevel) {
      case '0':priceGt = 0;pricelte=100;break;
      case '1':priceGt = 101;pricelte=500;break;
      case '2':priceGt = 501;pricelte=1000;break;
      case '3':priceGt = 1001;pricelte=5000;break;
    }
    params={
      salePrice:{
        $gt:priceGt,
        $lte:pricelte
      }
    }
  }


  let goodsModel = Goods.find(params).skip(skip).limit(pageSize)
  goodsModel.sort({'salePrice':sort})
  goodsModel.exec(function(err,doc){
    if(err){
      res.json({
        status:'1',
        msg:err.message,

      })
    }else{
      res.json({
        status:'0',
        mes:'success',
        result:{
          count:doc.length,
          list:doc
        }
      })
    }
  })
});

router.post("/addCart",function(req,res,next){
  var userId = '100000078',productId = req.body.productId;
  var User = require('../models/user');

  User.findOne({userId:userId},function(err,userDoc){
    if(err){
      res.json({
        status:"1",
        msg:err.message
      })
    }else{
      console.log('userDoc',userDoc)
      if(userDoc){
        Goods.findOne({productId:productId},function(err1,doc){
          if(err1){
            res.json({
              status:"1",
              msg:err.message
            })
          }else{
            if(doc){
              doc.productNum = 1;
              doc.checked = 1;
              userDoc.cartList.push(doc);
              userDoc.save(function(err2,doc2){
                if(err2){
                  res.json({
                    status:"1",
                    msg:err.message
                  })
                }else{
                  res.json({
                    status:'0',
                    msg:'',
                    result:'suc'
                  })
                }
              })
            }
          }
        });
      }
    }
  })
})

module.exports = router;
