/**
 * Created by bjc90_000 on 1/30/2016.
 */
var express = require('express');
var router = express.Router();
var profileUtil = require('../public/javascripts/ProfileUtility.js');

function getProfile(req){
    if(req.requestType == "PROFILE"&&req.uniqueKey.isString()){//valid profile req, continue
        return profileLookup(matchUser(req.uniqueKey));
    }

}

function profileLookup(user){
    //TODO find the user profile (profileDB) and return it
}

function matchUser(Ukey){
    //TODO find the user based on the uniquekey (uniquekeyDB) and return it
}

