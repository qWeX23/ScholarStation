/**
 * Created by bjc90_000 on 1/28/2016.
 */
var mongoose = require('mongoose'),
    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

exports.loginlist = function(gname, callback) {
    console.log("did it actually start?: "+db.toString());
    db.once('open', function() {
        console.log("in the once");
        var loginSchema = new mongoose.Schema({
            username: String,
            password: String
        });
    });
mongoose.connect('mongodb://localhost/SS');
    console.log('connection make');
        var LoginRequestModel = mongoose.model('login', loginSchema);
        LoginRequestModel.find({username:'qwex'},
            function (err, logins) {
                if (err) {
                     return console.error(err);
                } else {
                    mongoose.connection.close();
                    console.log("found: " + logins);
                    callback("", logins);
                }
            });

};

function validateLogin(request){

    console.log(request.username,request.password);
    var mongoose = require('mongoose'),
        db = mongoose.createConnection('localhost', 'login');
    db.on('error', console.error.bind(console, 'connection error:'));


console.log("shouldve made it this far");
     exports.loginlist = function(gname, callback) {
        console.log("did it actually start?");
        db.once('open', function() {
            var loginSchema = new mongoose.Schema({
                username: String,
                password: String
            });



                var loginRequestModel = db.model('login', loginSchema);


                loginRequestModel.find({username: request.username, password: request.password},
                    function (err, logins) {
                        if (err) {
                            onErr(err, callback);
                        } else {
                            mongoose.connection.close();
                            console.log("found: " + logins);
                            callback("", logins);
                        }
                    });
            });
        };

    if(exports.loginlist)
    return exports.loginlist;
    else
    return {fuck:"you"};
}
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 30; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function isValidLogin(username,password) {



}


//    console.log("paramaters");
//    console.log(username,password);
//
//   // pausecomp(10000);
//    var asd=locate(username,password);
//    console.log("returnValue before return " +asd);
//
//    return asd;
//
//
//}
//var returnValue=false;
//function locate(username, password){
//    returnValue= false;
//    var MongoClient = require('mongodb').MongoClient;
//     MongoClient.connect("mongodb://localhost:27017/SS", function(err, db){
//        if(err) {return console.dir(err);}
//
//        var collection = db.collection('login');
//        var Login = {username:username, password:password};
//        collection.findOne(Login, function(err, result){
//            // console.log(result.password);
//            if(result) {
//                returnValue = true;
//                console.log("found result "+result.username+result.password+"   "+returnValue);
//            }
//        });
//       //console.log(collection);
//
//    });
//
//    return returnValue;
//
//}
function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}
function enterToUKDB(user,id){
    // mongostuff also get unique key,
    return true;
}

exports.validateLogin= validateLogin;