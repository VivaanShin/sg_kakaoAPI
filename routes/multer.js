var express = require('express');
var request = require('request');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
var multer = require('multer')

var storage  = multer.diskStorage({ // 2
  destination(req, file, cb) {
    cb(null, 'uploadedFiles/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}__${file.originalname}`);
  },
});

var upload = multer({ dest: 'uploadedFiles/' }); // 3-1
var uploadWithOriginalFilename = multer({ storage: storage }); // 3-2


//routes/multer
router.get('/', async function(req, res, next) {
    
    res.render('multer');
});

//routes/multer/uploadFile
router.post('/uploadFile', upload.single('attachment'), function(req,res){ // 4 
  res.render('multer_confirmation', { file:req.file, files:null });
});

//routes/multer/uploadFileWithOriginalFilename
router.post('/uploadFileWithOriginalFilename', uploadWithOriginalFilename.single('attachment'), function(req,res){ // 5
  res.render('multer_confirmation', { file:req.file, files:null });
});

//routes/multer/uploadFiles
router.post('/uploadFiles', upload.array('attachments'), function(req,res){ // 6
  res.render('multer_confirmation', { file: null, files:req.files} );
});

//routes/multer/uploadFilesWithOriginalFilename
router.post('/uploadFilesWithOriginalFilename', uploadWithOriginalFilename.array('attachments'), function(req,res){ // 7
  res.render('multer_confirmation', { file:null, files:req.files });
});









module.exports = router;
