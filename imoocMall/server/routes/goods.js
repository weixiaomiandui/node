var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');


mongoose.connect('mongodb://127.0.0.1:27017/admin')
mongoose.connection.on("connected",function(){
  console.log('connect success')
})
mongoose.connection.on("error",function(){
  console.log('connect fail')
})
mongoose.connection.on("disconnected",function(){
  console.log('connect disconnected')
})


router.get("/",function(req,res,next){
  Goods.find({},function(err,doc){
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
})

module.exports = router;
