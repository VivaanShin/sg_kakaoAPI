var express = require('express');
var request = require('request');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
var translate = require('../request_modules/req_translation').translate;
var language_detect = require('../request_modules/req_translation').language_detect;

var resultData = {};

//routes/translation
router.get('/', async function(req, res, next) {
    
    res.render('translation');
});



//routes/translation/translate
router.get('/translate', async function(req, res, next) {
    
    res.render('translation_translate');
});


//routes/translation/translate
router.post('/translate', async function(req, res, next) {
    var query = req.body.query;
    var src_lang = req.body.src_lang;
    var target_lang = req.body.target_lang;
    console.log("query: ", query, "type query: ", typeof(query));
    console.log("src_lang: ", src_lang, "type src_lang: ", typeof(src_lang));
    console.log("target_lang: ", target_lang, "type target_lang: ", typeof(target_lang));
    
    resultData = await translate(query, src_lang, target_lang);
    resultData.query = query;
    resultData.src_lang = src_lang;
    resultData.target_lang = target_lang;
    console.log(resultData, "resultData type", typeof(resultData));
    if(resultData != null){   
        res.render('translation_translate_result', resultData);
    }else{
        res.redirect('translation_translate');
    }
    
});

//routes/translation/language_detect
router.get('/language_detect', async function(req, res, next) {
    
    res.render('translation_language_detect');
});


//routes/translation/language_detect
router.post('/language_detect', async function(req, res, next) {
    var query = req.body.query;
    console.log("query: ", query, "type query: ", typeof(query));
    
    resultData = await language_detect(query);
    resultData.query = query;
    console.log(resultData, "resultData type", typeof(resultData));
    if(resultData != null){   
        res.render('translation_language_detect_result', resultData);
    }else{
        res.redirect('translation_language_detect');
    }
    
});



module.exports = router;

