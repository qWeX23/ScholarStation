/**
 * Created by bjc90_000 on 1/28/2016.
 */
var express = require('express');
var router = express.Router();
var loginUtil = require('../public/javascripts/LoginUtility.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Theres Nothing Here!');
});


router.post('/', function(req,res,next){

    var request = req.body;
    res.send(loginUtil.validateLogin(request));

});


module.exports = router;