var express = require('express');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
const url = require('url');

//routes/oauth/kakao
router.get('/kakao', passport.authenticate('kakao'));


//routes/oauth/kakao/callback
router.get('/kakao/callback', passport.authenticate('kakao', {
    failureRedirect: '/',
}), (req, res) => {
    console.log("login success", res);
    res.redirect('/');
});


module.exports = router;
