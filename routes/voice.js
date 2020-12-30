var express = require('express');
var request = require('request');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
var fs = require('fs');

var voice_recognize = require('../request_modules/req_voice').voice_recognize;

var resultData = {};

//routes/voice
router.get('/', async function(req, res, next) {
    
    res.render('voice');
});



//routes/voice/recognize
router.get('/recognize', async function(req, res, next) {
    fs.readFile('.../audio/heykakao.wav', 'utf-8', function(err, data){
        if(err){
            console.error(err);
            
        }else{
            console.log('readfile wav file', data)
        }
    })
    
    res.render('voice_recognize');
});


//routes/voice/recognize
router.post('/recognize', async function(req, res, next) {
    
    fs.readFile('.../audio/heykakao.wav', 'utf-8', function(err, data){
        if(err){
            console.error(err);
            
        }else{
            console.log('readfile wav file', data)
        }
    })
    
    //resultData = await voice_recognize(audio);
    if(resultData != null){   
        res.render('voice_recognize_result');
    }else{
        res.redirect('voice_recognize');
    }
    
});

module.exports = router;

