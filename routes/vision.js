var express = require('express');
var request = require('request');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
var multer = require('multer')
var face_image_url = require('../request_modules/req_vision').face_image_url;
var product = require('../request_modules/req_vision').product;

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
    
    res.render('vision');
});


//routes/vision/face
router.post('/face/image_url', async function(req, res, next) {
    var image_url = req.body.image_url;
    console.log("image_url: ", image_url, "type image_url: ", typeof(image_url));
    
    resultData = await face_image_url(image_url);
    console.log(resultData);
    if(resultData != null){   
        res.render('vision', resultData);
    }else{
        res.redirect('vision');
    }
    
});

//routes/vision/product
router.get('/product', async function(req, res, next) {
    
    res.render('vision');
});


//routes/vision/product
router.post('/product', async function(req, res, next) {
    var query = req.body.query;
    console.log("query: ", query, "type query: ", typeof(query));
    
    resultData = await language_detect(query);
    resultData.query = query;
    console.log(resultData, "resultData type", typeof(resultData));
    if(resultData != null){   
        res.render('vision', resultData);
    }else{
        res.redirect('vision');
    }
    
});



module.exports = router;

