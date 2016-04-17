var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  var id = Math.floor( Math.random() * 100000000);
  res.redirect('/' + id);
  // res.render('index', { title: 'Express' });
  // res.sendFile( path.resolve( 'views/index.html'));
});

router.get('/:id([0-9]+)', function(req, res){
  res.sendFile( path.resolve( 'views/index.html'));
})

module.exports = router;
