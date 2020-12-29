var express = require('express');
var request = require('request');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
var multer = require('multer')
var face_image_url = require('../request_modules/req_vision').face_image_url;
var face_image = require('../request_modules/req_vision').face_image;
var product_image_url = require('../request_modules/req_vision').product_image_url;
var adult_image_url = require('../request_modules/req_vision').adult_image_url;
var thumbnailCrop_image_url = require('../request_modules/req_vision').thumbnailCrop_image_url;
var thumbnailDetect_image_url = require('../request_modules/req_vision').thumbnailDetect_image_url;
var multitag_image_url = require('../request_modules/req_vision').multitag_image_url;

var resultData = {};
var storage = multer.memoryStorage();
var upload = multer({ storage: storage }); // 3-1
var uploadWithOriginalFilename = multer({ storage: storage }); // 3-2

//routes/vision
router.get('/', async function(req, res, next) {
    
    res.render('vision');
});

//routes/vision/uploadFile
router.post('/uploadFile', upload.single('attachment'), function(req,res){ // 4 
  res.render('vision_confirmation', { file:req.file, files:null });
});

//routes/vision/uploadFileWithOriginalFilename
router.post('/uploadFileWithOriginalFilename', uploadWithOriginalFilename.single('attachment'), function(req,res){ // 5
  res.render('vision_confirmation', { file:req.file, files:null });
});

//routes/vision/uploadFiles
router.post('/uploadFiles', upload.array('attachments'), function(req,res){ // 6
  res.render('vision_confirmation', { file: null, files:req.files} );
});

//routes/vision/uploadFilesWithOriginalFilename
router.post('/uploadFilesWithOriginalFilename', uploadWithOriginalFilename.array('attachments'), function(req,res){ // 7
  res.render('vision_confirmation', { file:null, files:req.files });
});


//routes/vision/face
router.get('/face', async function(req, res, next) {
    
    res.render('vision_face');
});


//routes/vision/face/image_url
router.post('/face/image_url', async function(req, res, next) {
    var image_url = req.body.image_url;
    resultData = await face_image_url(image_url);
    if(resultData != null){   
        res.render('vision_face_result', resultData);
    }else{
        res.redirect('vision_face');
    }
    
});

//routes/vision/face/image
router.post('/face/image/uploadFilesWithOriginalFilename', uploadWithOriginalFilename.single('attachment'), async function(req, res, next) {
    console.log('face image in');
    console.log(req.file);
    var image = req.file
    resultData = await face_image();
    if(resultData != null){   
        res.render('vision_face_result', resultData);
    }else{
        res.redirect('vision_face');
    }
    
});

//routes/vision/product
router.get('/product', async function(req, res, next) {
    
    res.render('vision_product');
});


//routes/vision/product/image_url
router.post('/product/image_url', async function(req, res, next) {
    var image_url = req.body.image_url;
    resultData = await product_image_url(image_url);
    if(resultData != null){   
        res.render('vision_product_result', resultData);
    }else{
        res.redirect('vision_product');
    }
    
});


//routes/vision/adult
router.get('/adult', async function(req, res, next) {
    
    res.render('vision_adult');
});


//routes/vision/adult/image_url
router.post('/adult/image_url', async function(req, res, next) {
    var image_url = req.body.image_url;
    resultData = await adult_image_url(image_url);
    if(resultData != null){   
        res.render('vision_adult_result', resultData);
    }else{
        res.redirect('vision_adult');
    }
    
});

//routes/vision/thumbnailCrop
router.get('/thumbnailCrop', async function(req, res, next) {
    
    res.render('vision_thumbnailCrop');
});


//routes/vision/thumbnailCrop/image_url
router.post('/thumbnailCrop/image_url', async function(req, res, next) {
    var image_url = req.body.image_url;
    resultData = await thumbnailCrop_image_url(image_url);
    if(resultData != null){   
        res.render('vision_thumbnailCrop_result', resultData);
    }else{
        res.redirect('vision_thumbnailCrop');
    }
    
});

//routes/vision/thumbnailDetect
router.get('/thumbnailDetect', async function(req, res, next) {
    
    res.render('vision_thumbnailDetect');
});


//routes/vision/thumbnailDetect/image_url
router.post('/thumbnailDetect/image_url', async function(req, res, next) {
    var image_url = req.body.image_url;
    resultData = await thumbnailDetect_image_url(image_url);
    if(resultData != null){   
        res.render('vision_thumbnailDetect_result', resultData);
    }else{
        res.redirect('vision_thumbnailDetect');
    }
    
});

//routes/vision/multitag
router.get('/multitag', async function(req, res, next) {
    
    res.render('vision_multitag');
});


//routes/vision/multitag/image_url
router.post('/multitag/image_url', async function(req, res, next) {
    var image_url = req.body.image_url;
    resultData = await multitag_image_url(image_url);
    if(resultData != null){   
        res.render('vision_multitag_result', resultData);
    }else{
        res.redirect('vision_multitag');
    }
    
});


module.exports = router;

