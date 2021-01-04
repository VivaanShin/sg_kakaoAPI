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

//routes/map/search_keyword_list
router.get('/search_keyword_list', async function(req, res, next) {
    
    res.render('map_search_keyword_list');
});

//routes/map/search_category
router.get('/search_category', async function(req, res, next) {
    
    res.render('map_search_category');
});



module.exports = router;
