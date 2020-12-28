var express = require('express');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.body)
  res.render('logout', { title: 'Express' });
});

module.exports = router;
