var express = require('express');
var request = require('request');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
var local_search_address = require('../request_modules/req_local').local_search_address;

var resultData = {};

//routes/local
router.get('/', async function(req, res, next) {
    
    res.render('local');
});



//routes/local/search_address
router.get('/search_address', async function(req, res, next) {
    
    res.render('local_search_address');
});


//routes/local/search_address
router.post('/search_address', async function(req, res, next) {
    var query = req.body.query;
    console.log("query: ", query, "type query: ", typeof(query));
    
    resultData = await local_search_address(query);
    resultData.query = query;
    console.log(resultData, "resultData type", typeof(resultData));
    if(resultData != null){   
        res.render('local_search_address_result', resultData);
    }else{
        res.redirect('local_search_address');
    }
    

});


//routes/search/video
router.get('/coord2regioncode', async function(req, res, next) {
    
    res.render('local_coord2regioncode');
});


//routes/search/video
router.post('/coord2regioncode', async function(req, res, next) {
    var x = req.body.x;
    var y = req.body.y;
    var input_coord = req.body.input_coord;
    var output_coord = req.body.output_coord;
    
    resultData = await search_video(x, y, input_coord, output_coord);
    console.log(resultData, "resultData type", typeof(resultData));
    if(resultData != null){   
        res.render('local_coord2regioncode_result', resultData);
    }else{
        res.redirect('local_coord2regioncode');
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