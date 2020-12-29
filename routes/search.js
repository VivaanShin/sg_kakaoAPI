var express = require('express');
var request = require('request');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
var search_web = require('../request_modules/req_search').search_web;
var search_video = require('../request_modules/req_search').search_video;
var search_image = require('../request_modules/req_search').search_image;
var search_blog = require('../request_modules/req_search').search_blog;
var search_book = require('../request_modules/req_search').search_book;
var search_cafe = require('../request_modules/req_search').search_cafe;

var resultData = {};

//routes/search
router.get('/', async function(req, res, next) {
    
    res.render('search');
});



//routes/search/web
router.get('/web', async function(req, res, next) {
    
    res.render('search_web');
});


//routes/search/web
router.post('/web', async function(req, res, next) {
    var query = req.body.query;
    console.log("query: ", query, "type query: ", typeof(query));
    
    resultData = await search_web(query);
    resultData.query = query;
    console.log(resultData, "resultData type", typeof(resultData));
    if(resultData != null){   
        res.render('search_web_result', resultData);
    }else{
        res.redirect('search_web');
    }
    
});


//routes/search/video
router.get('/video', async function(req, res, next) {
    
    res.render('search_video');
});


//routes/search/video
router.post('/video', async function(req, res, next) {
    var query = req.body.query;
    console.log("query: ", query, "type query: ", typeof(query));
    
    resultData = await search_video(query);
    resultData.query = query;
    console.log(resultData, "resultData type", typeof(resultData));
    if(resultData != null){   
        res.render('search_video_result', resultData);
    }else{
        res.redirect('search_video');
    }
    
});

//routes/search/image
router.get('/image', async function(req, res, next) {
    
    res.render('search_image');
});


//routes/search/image
router.post('/image', async function(req, res, next) {
    var query = req.body.query;
    console.log("query: ", query, "type query: ", typeof(query));
    
    resultData = await search_image(query);
    resultData.query = query;
    console.log(resultData, "resultData type", typeof(resultData));
    if(resultData != null){   
        res.render('search_image_result', resultData);
    }else{
        res.redirect('search_image');
    }
    
});

//routes/search/blog
router.get('/blog', async function(req, res, next) {
    
    res.render('search_blog');
});


//routes/search/blog
router.post('/blog', async function(req, res, next) {
    var query = req.body.query;
    console.log("query: ", query, "type query: ", typeof(query));
    
    resultData = await search_blog(query);
    resultData.query = query;
    console.log(resultData, "resultData type", typeof(resultData));
    if(resultData != null){   
        res.render('search_blog_result', resultData);
    }else{
        res.redirect('search_blog');
    }
    
});

//routes/search/book
router.get('/book', async function(req, res, next) {
    
    res.render('search_book');
});


//routes/search/book
router.post('/book', async function(req, res, next) {
    var query = req.body.query;
    console.log("query: ", query, "type query: ", typeof(query));
    
    resultData = await search_book(query);
    resultData.query = query;
    console.log(resultData, "resultData type", typeof(resultData));
    if(resultData != null){   
        res.render('search_book_result', resultData);
    }else{
        res.redirect('search_book');
    }
    
});

//routes/search/cafe
router.get('/cafe', async function(req, res, next) {
    
    res.render('search_cafe');
});


//routes/search/cafe
router.post('/cafe', async function(req, res, next) {
    var query = req.body.query;
    console.log("query: ", query, "type query: ", typeof(query));
    
    resultData = await search_cafe(query);
    resultData.query = query;
    console.log(resultData, "resultData type", typeof(resultData));
    if(resultData != null){   
        res.render('search_cafe_result', resultData);
    }else{
        res.redirect('search_cafe');
    }
    
});


module.exports = router;