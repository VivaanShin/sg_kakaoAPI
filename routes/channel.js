var express = require('express');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
var req_channel = require('../request_modules/req_channel');
var resultData = {};

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

//routes/channel/plusfriends
router.get('/plusfriends', async function(req, res, next) {
  var token = req.session.token;
    resultData = await req_channel.check_plusfriends(token);
    console.log("resultData: ", resultData);
  res.render('channel_plusfriends', resultData);
});

module.exports = router;
