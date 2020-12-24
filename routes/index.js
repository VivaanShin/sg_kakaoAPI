var express = require('express');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
