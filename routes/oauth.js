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
var logoutWithAccount = require('../request_modules/req_oauth').logoutWithAccount;
var token_info = require('../request_modules/req_oauth').token_info;
var token_refresh = require('../request_modules/req_oauth').token_refresh;
var user_info_token = require('../request_modules/req_oauth').user_info_token;
var user_info_admin = require('../request_modules/req_oauth').user_info_admin;

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
    req.session.refresh_token = result.refresh_token;

    console.log("req.session\n", req.session);
    req.session.save(function(){
        if(req.session.token != null){
        res.redirect(200,'/');
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
    console.log("logout in")
    console.log(req.body)
   if(req.session.token != null){
       var token = req.session.token;
       var result = await logout_token(token);
        req.session = null;
        resultData.login_check = "현재 비로그인 상태입니다.";
        res.redirect(200, '/');
       
       
   }else{
        resultData.login_check = "현재 비로그인 상태입니다.";
        res.render('index', resultData);
   } 
    
    
});

//routes/oauth/logoutWithAccount
router.get('/logoutWithAccount', async function(req, res, next) {
    console.log("카카오계정과 함께 로그아웃")
    var state = await logoutWithAccount();
    console.log(state);
});

//routes/oauth/unlink_alert
router.get('/unlink_alert', function(req, res, next) {
    console.log("req_headers\n",req.headers);
    console.log("req_body\n",req.body);
    
  res.send(200, "200 OK"); 
});


//routes/oauth/token/info
router.get('/token/info', async function(req, res, next) {
    if(req.session.token != null){
        var token = req.session.token;
        resultData = await token_info(token);
        console.log("resultData: ", resultData);
        res.render('oauth_token_info', resultData); 
    }else{
        res.render('oauth/kakao');
    }
    resultData;
  
});

//routes/oauth/token/refresh
router.get('/token/refresh', async function(req, res, next) {
    if(req.session.refresh_token != null){
        var token = req.session.refresh_token;
        console.log("refresh_token: ", token);
        resultData = await token_refresh(token);
        req.session.token = resultData.access_token;
        if(resultData.refresh_token != null){
            req.session.refresh_token = resultData.refresh_token;
        }else{
            resultData.refresh_token = token;
        }
        
        console.log("resultData: ", resultData);
        res.render('oauth_refresh_token_info', resultData); 
    }else{
        res.render('oauth/kakao');
    }
    resultData;
    
  
});

//routes/oauth/user_info
router.get('/user_info', function(req, res, next) {
  res.render('oauth_user_info', { title: 'Express' });
});

//routes/oauth/user_info/token
router.get('/user_info/token', async function(req, res, next) {
    if(req.session.token != null){
        var token = req.session.token;
        resultData = await user_info_token(token);
        
        console.log("resultData: ", resultData);
        res.render('oauth_user_info_result', resultData); 
    }else{
        res.render('oauth/kakao');
    }
    resultData;
    
  
});

//routes/oauth/user_info/admin
router.get('/user_info/admin', async function(req, res, next) {
    if(req.session.token != null){
        resultData = await user_info_admin();
        
        console.log("resultData: ", resultData);
        res.render('oauth_user_info_result', resultData); 
    }else{
        res.render('oauth/kakao');
    }
    resultData;
    
  
});



module.exports = router;
