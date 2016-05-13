var express = require('express');
var router = express.Router();

/* GET pic search page. */
router.get('/pic-search', function(req, res) {
    res.render('picsearch', { title: 'Welcome, Guest!' });
});

/* GET home page. */
router.get('/', function(req, res, next) { 
  res.render('layout', { title: 'Welcome, Guest!' });   
});

module.exports = router;
