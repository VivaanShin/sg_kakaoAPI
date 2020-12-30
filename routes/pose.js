var express = require('express');
var request = require('request');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
var multer = require('multer')
const url = require('url');
var imageAnalysis_image_url = require('../request_modules/req_pose').imageAnalysis_image_url;
var videoAnalysis_video_url = require('../request_modules/req_pose').videoAnalysis_video_url;
var videoAnalysis_result = require('../request_modules/req_pose').videoAnalysis_result;

var resultData = {};
var storage = multer.memoryStorage();
var upload = multer({ storage: storage }); // 3-1
var uploadWithOriginalFilename = multer({ storage: storage }); // 3-2


//routes/pose
router.get('/', async function(req, res, next) {
    
    res.render('pose');
});

//routes/pose/imageAnalysis
router.get('/imageAnalysis', async function(req, res, next) {
    
    res.render('pose_imageAnalysis');
});


//routes/pose/imageAnalysis/image_url
router.post('/imageAnalysis/image_url', async function(req, res, next) {
    console.log("imageAnalysis post in")
    var image_url = req.body.image_url;
    var result = {};
    result = await imageAnalysis_image_url(image_url);
    resultData.result = result;
    console.log("\n\n--------resultData--------\n", resultData);
    if(resultData != null){   
        res.render('pose_imageAnalysis_result', resultData);
    }else{
        res.redirect('pose_imageAnalysis');
    }
    
});


//routes/pose/videoAnalysis
router.get('/videoAnalysis', async function(req, res, next) {
    
    res.render('pose_videoAnalysis');
});


//routes/pose/videoAnalysis/video_url
router.post('/videoAnalysis/video_url', async function(req, res, next) {
    console.log("videoAnalysis post in")
    var video_url = req.body.video_url;
    resultData = await videoAnalysis_video_url(video_url);
    console.log("\n\n--------resultData--------\n", resultData);
    if(resultData != null){   
        res.render('pose_videoAnalysis_result_request', resultData);
    }else{
        res.redirect('pose_videoAnalysis');
    }
    
});

//routes/pose/videoAnalysis/result
router.post('/videoAnalysis/result', async function(req, res, next) {
    console.log("videoAnalysis result post in")
    var job_id = req.body.job_id;
    resultData = await videoAnalysis_result(job_id);
    console.log("\n\n--------resultData--------\n", resultData);
    if(resultData != null){   
        res.render('pose_videoAnalysis_result', resultData);
    }else{
        res.redirect('pose_videoAnalysis');
    }
    
});

//routes/pose/videoAnalysis/callback
router.get('/videoAnalysis/callback', async function(req, res, next) {
    console.log("callback in!!")
    console.log(req.url);
});


module.exports = router;
