var express = require('express');
var request = require('request');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
var req_story = require('../request_modules/req_story');

var API_Call = require('../service/API_Call')('kakao');
var resultData = {};
/* GET home page. */
router.get('/check', async function(req, res, next) {
    var token = req.session.token;
    var check = await req_story.story_check(token);
    console.log("check ", check, "check type", typeof(check));
    resultData.check = check;
    console.log("resultData", resultData);
    res.render('story', resultData);
});

router.get('/get_profile', async function(req, res, next) {
    var token = req.session.token;
    resultData = await req_story.get_story_profile(token);
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
    
    resultData = await req_story.write_text(token, content);
    req.session.story_id = resultData.id;
    console.log(resultData, "resultData type", typeof(resultData));
    if(resultData != null){   
        res.render('story_write_text', resultData);
    }else{
        res.redirect('index');
    }
    
});

//routes/story/get_mystory
router.get('/get_mystory', async function(req,res,next){
    var token = req.session.token;
    console.log(req.session.story_id);
    var story_id = req.session.story_id;
    resultData = await req_story.get_mystory(token, story_id);
    if(resultData.media != undefined){
        resultData.media = "null";
    }
    if(resultData.comments != undefined){
        resultData.comments = "null";
    }
    if(resultData.likes != undefined){
        resultData.likes = "null";
    }
    
    
    
    console.log("resultData\n", resultData);
    
    res.render('story_get_mystory', resultData);
})

module.exports = router;
