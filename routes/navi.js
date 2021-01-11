var express = require('express');
var request = require('request');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
var resultData = {};

//routes/navi
router.get('/', async function(req, res, next) {
    
    res.render('navi');
});



//routes/navi/get_directions
router.get('/get_directions', async function(req, res, next) {
    
    res.render('navi_get_directions');
});

//routes/navi/share_destination
router.get('/share_destination', async function(req, res, next) {
    
    res.render('navi_share_destination');
});


module.exports = router;
