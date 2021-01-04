var express = require('express');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
var req_social = require('../request_modules/req_social');


//routes/social/profile/sdk
router.get('/profile/sdk', function(req, res, next) {
    console.log(req.body)
  res.render('social_profile_sdk', { title: 'Express' });
});



//routes/social/profile/rest
router.get('/profile/rest', async function(req, res, next) {
    if(req.session.token != null){
        var token = req.session.token;
        resultData = await req_social.user_profile_token(token);
        
        console.log("resultData: ", resultData);
        res.render('social_profile_rest', resultData); 
    }else{
        res.render('oauth/kakao');
    }
    resultData;    
});




//routes/social/friends/sdk
router.get('/friends/sdk', function(req, res, next) {
    console.log(req.body)
  res.render('social_friends_sdk', { title: 'Express' });
});

//routes/social/friends/rest
router.get('/friends/rest', async function(req, res, next) {
    if(req.session.token != null){
        var token = req.session.token;
        resultData = await req_social.user_friends_list_token(token);
        if(resultData.msg == "insufficient scopes."){
            console.log("insufficient scope in")
            var check = await req_social.user_friends_list_agree();
            res.send(check);
        }else{
            if(resultData.after_url == undefined){
            resultData.after_url == null
        }
        if(resultData.before_url == undefined){
            resultData.before_url == null
        }
        console.log("resultData: ", resultData);
        res.render('social_friends_rest', resultData); 
            
        }
        
    }else{
        res.render('oauth/kakao');
    }
    resultData;
    
});

//routes/social/friends/rest/agree
router.get('/friends/rest/agree', function(req, res, next) {
    console.log("friends rest agree in");
    console.log(req.url);
    console.log(req.body)
  res.redirect(200, '/social/friends/rest');
});

module.exports = router;
