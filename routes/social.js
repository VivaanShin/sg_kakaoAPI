var express = require('express');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();

/* GET home page. */
router.get('/friends', function(req, res, next) {
    console.log(req.body)
  res.render('social_friends', { title: 'Express' });
});

/* GET home page. */
router.get('/profile', function(req, res, next) {
    console.log(req.body)
  res.render('social_profile', { title: 'Express' });
});

module.exports = router;
