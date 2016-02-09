/**
 * Created by bjc90_000 on 2/8/2016.
 */
var express = require('express');
var app = express();
var router = express.Router();

router.get('/',function(req,res,next){
    //change this name
   //res.sendFile('../views/index.html');
});
module.exports = router;