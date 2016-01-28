/**
 * Created by bjc90_000 on 1/28/2016.
 */
var express = require('express');
var router = express.Router();
var loginUtil = require('LoginUtility.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Theres Nothing Here!');
});
router.post('/', function(req,res,next){
   var request = req.body;

    if(request.username.isString()){
         if(request.password.isString()){
         // this is a login object, continue to verification.

            if(true){// is the user valid???

              if(true){//is the password valid???
                  var id =makeid();
                  if(enterToUKDB(request.username,id))(
                      res.send({
                          Verdict:true,
                          authenticationKey:id ,
                          KeyTTL:60,
                      })
                  )

              }
           }
         }
    }


});

function isValidUser( username){

}
function isValidPassword(password){

}
function enterToUKDB(user,id){
    // mongostuff also get unique key,
}
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 30; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

module.exports = router;