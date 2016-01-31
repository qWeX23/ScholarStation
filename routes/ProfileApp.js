/**
 * Created by bjc90_000 on 1/30/2016.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('This is the Profiles Page that the App commnicates with');
});


router.post('/',function(req,res,next){
    var request = req.body;
    res.send(profileUtil.getProfile(request));
});

module.exports = router;
