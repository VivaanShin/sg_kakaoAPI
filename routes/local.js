var express = require('express');
var request = require('request');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
var local_search_address = require('../request_modules/req_local').local_search_address;
var coord2regioncode = require('../request_modules/req_local').coord2regioncode;
var coord2address = require('../request_modules/req_local').coord2address;

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


//routes/local/coord2regioncode
router.get('/coord2regioncode', async function(req, res, next) {
    
    res.render('local_coord2regioncode');
});


//routes/local/coord2regioncode
router.post('/coord2regioncode', async function(req, res, next) {
    var x = req.body.x;
    var y = req.body.y;
    console.log("x, y:", x, y);
    //var input_coord = req.body.input_coord;
    //var output_coord = req.body.output_coord;
    
    resultData = await coord2regioncode(x, y);
    console.log(resultData, "resultData type", typeof(resultData));
    if(resultData != null){   
        res.render('local_coord2regioncode_result', resultData);
    }else{
        res.redirect('local_coord2regioncode');
    }
    
});

//routes/local/coord2address
router.get('/coord2address', async function(req, res, next) {
    
    res.render('local_coord2address');
});


//routes/local/coord2address
router.post('/coord2address', async function(req, res, next) {
    var x = req.body.x;
    var y = req.body.y;
    resultData = await coord2address(x, y);
    
    console.log(resultData, "resultData type", typeof(resultData));
    if(resultData != null){   
        res.render('local_coord2address_result', resultData);
    }else{
        res.redirect('local_coord2address');
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