/**
 * Created by bjc90_000 on 1/28/2016.
 */
var express = require('express');
var app = express();
var router = express.Router();
var loginUtil = require('../public/javascripts/LoginUtility.js');

/* GET users listing. */
//router.get('/', function(req, res, next) {
//    res.send("nothing");
//});


router.post('/', function(req,res,next){
    console.log("psot made");
var strGroup = req.body;
  loginUtil.loginlist(strGroup, function(err,loginlist){
      console.log("calling the shit");
        res.send(loginlist);
    });


});

//app.post('/', function (req,res,next){
//    res.json({hello:"world"})
//});

module.exports = router;