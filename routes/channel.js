var express = require('express');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();

/* GET home page. */
router.get('/add', function(req, res, next) {
    console.log(req.body)
  res.render('channel_add', { title: 'Express' });
});

/* GET home page. */
router.get('/chatting', function(req, res, next) {
    console.log(req.body)
  res.render('channel_chatting', { title: 'Express' });
});

module.exports = router;
