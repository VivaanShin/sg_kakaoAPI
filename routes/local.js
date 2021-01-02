var express = require('express');
var request = require('request');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
var local_search_address = require('../request_modules/req_local').local_search_address;
var coord2regioncode = require('../request_modules/req_local').coord2regioncode;
var coord2address = require('../request_modules/req_local').coord2address;
var transcoord = require('../request_modules/req_local').transcoord;
var local_keyword = require('../request_modules/req_local').local_keyword;
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
    console.log("x, y:", x, y)
    resultData = await coord2address(x, y);
    
    console.log(resultData, "resultData type", typeof(resultData));
    if(resultData != null){   
        res.render('local_coord2address_result', resultData);
    }else{
        res.redirect('local_coord2address');
    }
    
});

//routes/local/transcoord
router.get('/transcoord', async function(req, res, next) {
    
    res.render('local_transcoord');
});


//routes/local/transcoord
router.post('/transcoord', async function(req, res, next) {
    var x = req.body.x;
    var y = req.body.y;
    var input_coord = req.body.input_coord;
    var output_coord = req.body.output_coord;
    
    console.log("x, y:", x, y)
    resultData = await transcoord(x, y, input_coord, output_coord);
    
    console.log(resultData, "resultData type", typeof(resultData));
    if(resultData != null){   
        res.render('local_transcoord_result', resultData);
    }else{
        res.redirect('local_transcoord');
    }
    
});


//routes/local/keyword
router.get('/keyword', async function(req, res, next) {
    
    res.render('local_keyword');
});


//routes/local/keyword
router.post('/keyword', async function(req, res, next) {
    var query = req.body.query;
    
    console.log("query", query)
    resultData = await local_keyword(query);
    resultData.query = query;
    console.log(resultData, "resultData type", typeof(resultData));
    if(resultData != null){   
        res.render('local_keyword_result', resultData);
    }else{
        res.redirect('local_keyword');
    }
    
});

//routes/local/category
router.get('/category', async function(req, res, next) {
    
    res.render('local_category');
});


//routes/local/category
router.post('/category', async function(req, res, next) {
    var query = req.body.query;
    
    console.log("query", query)
    resultData = await local_category(query);
    resultData.query = query;
    console.log(resultData, "resultData type", typeof(resultData));
    if(resultData != null){   
        res.render('local_category_result', resultData);
    }else{
        res.redirect('local_category');
    }
    
});


module.exports = router;