var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/',function(req,res){
  console.log("INDEX.JS... REQ BODY");
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
