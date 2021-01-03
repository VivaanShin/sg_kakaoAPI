var express = require('express');
var request = require('request');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
var resultData = {};

//routes/map
router.get('/', async function(req, res, next) {
    
    res.render('map');
});



//routes/map/search_keyword
router.get('/search_keyword', async function(req, res, next) {
    
    res.render('map_search_keyword');
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

module.exports = router;
