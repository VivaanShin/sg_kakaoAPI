var express = require('express');
var request = require('request');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
var multer = require('multer')
var imageAnalysis_image_url = require('../request_modules/req_pose').imageAnalysis_image_url;

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


module.exports = router;
