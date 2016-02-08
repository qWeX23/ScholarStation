/**
 * Created by bjc90_000 on 1/28/2016.
 */
var express = require('express');
var app = express();
var router = express.Router();


var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost/SS';
/* GET listing. */
//router.get('/', function(req, res, next) {
//    res.send("nothing");
//});
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 30; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

router.post('/', function(req,res,next){
    //asynch function for validation login
    var validateLogin = function(db, callback) {
        var cursor =db.collection('login').findOne({username:req.body.username,password:req.body.password},function(err,document){

            if(err)//error: something went wroing
            res.send("DBError");
            if(document){//found in the login collection
                var KEY = makeid();
                var ValidatedLoginUK = {user:document.username,KEY:KEY};
                db.collection('uniquekey').insert(ValidatedLoginUK, {w: 1}, function(err, records){//inserts into the uniquekey collection
                    if(err){
                        console.log("could not validatelogin-- insert");
                        res.send({error:"error in uniquekey collection insert"});
                    }else
                    console.log("Record added ",records);
                });
                res.send({validate:true ,username:document.username, password:document.password,KEY:KEY, user:req.body.username});
               }
             else

            res.send({validate:false})
        } );
        //  use this if you want to do
        //cursor.each(function(err, doc) {
        //    assert.equal(err, null);
        //    if (doc != null) {
        //        console.dir("found this:"+doc);
        //        res.send(doc);
        //        callback();
        //    } else {
        //        if(cursor)
        //        res.send({fuck:"you"});
        //        callback();
        //    }
        //});

    };
    // creates connection and calls validate login
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        validateLogin(db, function() {
            db.close();

        });
    });

});

//app.post('/', function (req,res,next){
//    res.json({hello:"world"})
//});

module.exports = router;