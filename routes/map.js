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

//routes/map/search_by_category
router.get('/search_by_category', async function(req, res, next) {
    
    res.render('map_search_by_category');
});

//routes/map/display_place_by_address
router.get('/display_place_by_address', async function(req, res, next) {
    
    res.render('map_display_place_by_address');
});

//routes/map/address_by_location
router.get('/address_by_location', async function(req, res, next) {
    
    res.render('map_address_by_location');
});

//routes/map/toolbox
router.get('/toolbox', async function(req, res, next) {
    
    res.render('map_toolbox');
});




module.exports = router;
