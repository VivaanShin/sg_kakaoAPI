var express = require('express');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
const url = require('url');
var resultData = {};
var API_Call = require('../service/API_Call')('oauth');
var get_token = require('../request_modules/req_oauth').get_token;
var logout_token = require('../request_modules/req_oauth').logout_token;

/*
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
*/

//routes/oauth/kakao
router.get('/kakao', passport.authenticate('kakao'));


//routes/oauth/kakao/callback
router.get('/kakao/callback',async function(req, res){
    console.log("login success", req.url);
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    var authorization_code = queryData.code;
    console.log(authorization_code);
    var result = await get_token(authorization_code);
    req.session.token = result.access_token;

    console.log("req.session\n", req.session);
    req.session.save(function(){
        if(req.session.token != null){
        resultData.login_check = "현재 로그인 상태입니다.";
        res.render('index', resultData);
    }else{
        resultData.login_check = "현재 비로그인 상태입니다.";
        res.render('index', resultData);
    }
    })
    resultData;
    
    //req.session.token = token;
    //console.log("session check: ",req.session.token);
});


//routes/oauth/logout
router.get('/logout', async function(req, res, next) {
    console.log(req.body)
   if(req.session.token != null){
       var token = req.session.token;
       var result = await logout_token(token);
        await req.session.destory(function(){
            req.session;
            resultData.login_check = "현재 비로그인 상태입니다.";
            res.render('index', resultData);
        });
       
       
   }else{
        resultData.login_check = "현재 비로그인 상태입니다.";
        res.render('index', resultData);
   } 
    
    
});



module.exports = router;
