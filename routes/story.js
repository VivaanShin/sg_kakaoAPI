var express = require('express');
var request = require('request');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
var multer = require('multer')
var fs = require('fs');

var storage  = multer.diskStorage({ // 2
  destination(req, file, cb) {
    cb(null, 'public/uploadedFiles/');
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

var upload = multer({ dest: 'public/uploadedFiles/' }); // 3-1
var uploadWithOriginalFilename = multer({ storage: storage }); // 3-2





var req_story = require('../request_modules/req_story');
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

//rest form permission이 공개범위, 현재 나만보기로 설정되어있음
//routes/story/write_text
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
    console.log("session story_id: ",req.session.story_id);
    var story_id = req.session.story_id;
    resultData = await req_story.get_mystory(token, story_id);
    if(resultData.hasOwnProperty('comments') != true){
        resultData.comments = "NOT DATA";
    }
    if(resultData.hasOwnProperty('likes') != true){
        resultData.likes = "NOT DATA";
    }
    
    
    
    console.log("resultData\n", resultData);
    
    res.render('story_get_mystory', resultData);
})

//routes/story/get_mystory
router.post('/get_mystory', async function(req,res,next){
    var token = req.session.token;
    console.log("session story_id: ",req.session.story_id);
    var story_id = req.session.story_id;
    if(req.body.story_id != null){
        story_id = req.body.story_id;
    }
    resultData = await req_story.get_mystory(token, story_id);
    if(resultData.hasOwnProperty('comments') != true){
        resultData.comments = "NOT DATA";
    }
    if(resultData.hasOwnProperty('likes') != true){
        resultData.likes = "NOT DATA";
    }
    
    
    
    console.log("resultData\n", resultData);
    
    res.render('story_get_mystory', resultData);
})

//routes/story/get_mystories
router.get('/get_mystories', async function(req,res,next){
    var token = req.session.token;
    var result = await req_story.get_mystories(token);
    resultData.story = result;
    resultData.delete_check = "n";
    
    console.log("resultData\n", resultData);
    
    res.render('story_get_mystories', resultData);
})


//routes/story/delete_mystory
router.post('/delete_mystory', async function(req,res,next){
    var token = req.session.token;
    var story_id = req.body.story_id;
    console.log("story_id: ", story_id);
    var delete_result = await req_story.delete_mystory(token, story_id);
    var result = await req_story.get_mystories(token);
    resultData.story = result;
    
    resultData.delete_check = "y";
    
    
    
    console.log("resultData\n", resultData);
    
    res.render('story_get_mystories', resultData);
})

//routes/story/writeWithImage
router.get('/writeWithImage', async function(req,res,next){
    
    res.render('story_writeWithImage');
})

//routes/story/uplodeWithImage
router.post('/uplodeWithImage', upload.single('attachment'), async function(req,res,next){
    console.log(req.file);
    var file = req.file;
    var token = req.session.token;
    resultData = await req_story.upload_image(token, file)
    res.render('story_writeWithImage');
})

//routes/story/uplodeWithImageOriginalFilename
router.post('/uplodeWithImageOriginalFilename', uploadWithOriginalFilename.single('attachment'), async function(req,res,next){
    console.log(req.file);
    var file = req.file;
    var token = req.session.token;
    resultData = await req_story.upload_image(token, file)
    res.render('story_writeWithImage');
})

module.exports = router;
