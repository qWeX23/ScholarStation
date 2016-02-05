/**
 * Created by bjc90_000 on 1/30/2016.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('This is the Profiles Page that the App commnicates with');
});

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost/SS';
router.post('/',function(req,res,next){

});

module.exports = router;
