var express = require('express');
var passport = require('passport');
var router = express.Router();
const url = require('url');

//routes/oauth/kakao
router.get('/kakao', passport.authenticate('kakao'));


//routes/oauth/kakao/callback
router.get('/kakao/callback', passport.authenticate('kakao', {
    failureRedirect: '/',
}), (req, res) => {
    res.redirect('/');
});


module.exports = router;
