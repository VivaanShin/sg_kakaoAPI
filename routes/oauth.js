var express = require('express');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
const url = require('url');
var resultData = {};
var API_Call = require('../service/API_Call')('oauth');


//routes/oauth/kakao
router.get('/kakao', passport.authenticate('kakao'));


//routes/oauth/kakao/callback
router.get('/kakao/callback',async function(req, res){
    console.log("login success", req.url);
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    var authorization_code = queryData.code;
    console.log(authorization_code);
    await API_Call.token(authorization_code, function(err,result){
        if(!err){
            console.log(result)
            req.session.token = result.access_token;
            console.log(req.session);
            res.render('oauth');
        }else{
            res.json(err);
        }
    })
    //req.session.token = token;
    //console.log("session check: ",req.session.token);
});




module.exports = router;
