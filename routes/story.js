var express = require('express');
var request = require('request');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
var story_check = require('../request_modules/req_story').story_check;
var get_story_profile = require('../request_modules/req_story').get_story_profile;
var write_text = require('../request_modules/req_story').write_text;

var API_Call = require('../service/API_Call')('kakao');
var resultData = {};
/* GET home page. */
router.get('/check', async function(req, res, next) {
    var token = req.session.token;
    var check = await story_check(token);
    console.log("check ", check, "check type", typeof(check));
    resultData.check = check;
    console.log("resultData", resultData);
    res.render('story', resultData);
});

router.get('/get_profile', async function(req, res, next) {
    var token = req.session.token;
    resultData = await get_story_profile(token);
    console.log(resultData, "resultData type", typeof(resultData));
    if(resultData != null){   
        res.render('story_profile', resultData);
    }else{
        res.redirect('index');
    }
    
});

router.get('/write_text', function(req,res,next){
    res.render('story_write_text');
})


router.post('/write_text', async function(req, res, next) {
    var token = req.session.token;
    console.log(req.body);
    var content = req.body.content;
    console.log("content: ", content, "type content: ", typeof(content));
    
    resultData = await write_text(token, content);
    console.log(resultData, "resultData type", typeof(resultData));
    if(resultData != null){   
        res.render('story_write_text', resultData);
    }else{
        res.redirect('index');
    }
    
});

module.exports = router;
