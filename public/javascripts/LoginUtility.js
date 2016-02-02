/**
 * Created by bjc90_000 on 1/28/2016.
 */

function validateLogin(request){
    var MongoClient = require('mongod').MongoClient;
    MongoClient.connect("mongodb://localhost:27017/SS", function(err, db){
        if(err) {return console.dir(err);}

        var collection = db.collection('login');
        var docs = {username:'qwex'};

        collection.findOne(docs, function(err, result){
            console.log(result.password);
        });
    });
    if(request.username.isString()){
        if(request.password.isString()){
            // this is a login object, continue to verification.
            if(isValidUser()){// is the user valid???
                if(isValidPassword()){//is the password valid???
                    var id =makeid();
                    if(enterToUKDB(request.username,id)){
                        return {
                            Verdict:true,
                            authenticationKey:id ,
                            KeyTTL:60,
                        };
                    }else{// TODO something gone terribly wrong error
                    }

                }else{// TODO invalid password
                }
            }else{//TODO invalid username
            }
        }else{// TODO return invalid request error password is not a string
        }
    }else{// TODO return invalid request error username is not a string
    }

    return {
        failure:"failure"
    };
}
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 30; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
function isValidUser( username){

}
function isValidPassword(password){

}
function enterToUKDB(user,id){
    // mongostuff also get unique key,
}

exports.validateLogin= validateLogin;