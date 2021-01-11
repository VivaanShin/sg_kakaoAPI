var express = require('express');
var request = require('request');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
var req_payment = require('../request_modules/req_payment')
var resultData = {};
var url = require('url');

//routes/pay
router.get('/', async function(req, res, next) {
    
    res.render('pay');
});



//routes/pay/payment_ready
router.get('/payment_ready', async function(req, res, next) {
    
    res.render('pay_payment_ready');
});

//routes/pay/payment_ready
router.post('/payment_ready', async function(req, res, next) {
    var paymentData ={};
    console.log(req.body);
    paymentData = JSON.parse(JSON.stringify(req.body));
    req.session.paymentInfo = {
        "cid": paymentData.cid,
        "partner_order_id": paymentData.partner_order_id,
        "partner_user_id": paymentData.partner_user_id,
        "tid": ""
    }
    resultData = await req_payment.payment_ready(paymentData);
    console.log("\n1",resultData);
    req.session.paymentInfo.tid = resultData.tid;
    //req.session.save();
    res.redirect(resultData.next_redirect_pc_url);
});

//routes/pay/payment/approval
router.get('/payment/approval', async function(req, res, next) {
    console.log("approval req_url", req.url);
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    console.log("queryData", queryData);
    var pg_token = queryData.pg_token;
    console.log("pg_token", pg_token);
    console.log("req.session", req.session);
    resultData = await req_payment.payment_approve(req, pg_token);
    res.render('pay_payment_approval', resultData);
});

//routes/pay/payment/cancel
router.get('/payment/cancel', async function(req, res, next) {
    console.log("cancel req_body", req.body);
    res.render('pay_payment_ready');
});


//routes/pay/payment/fail
router.get('/payment/fail', async function(req, res, next) {
    console.log("fail req_body", req.body);
    res.render('pay_payment_ready');
});




//routes/pay/search_keyword_list
router.get('/search_keyword_list', async function(req, res, next) {
    
    res.render('map_search_keyword_list');
});

//routes/pay/search_category
router.get('/search_category', async function(req, res, next) {
    
    res.render('map_search_category');
});

//routes/pay/search_by_category
router.get('/search_by_category', async function(req, res, next) {
    
    res.render('map_search_by_category');
});

//routes/pay/display_place_by_address
router.get('/display_place_by_address', async function(req, res, next) {
    
    res.render('map_display_place_by_address');
});

//routes/pay/address_by_location
router.get('/address_by_location', async function(req, res, next) {
    
    res.render('map_address_by_location');
});

//routes/pay/toolbox
router.get('/toolbox', async function(req, res, next) {
    
    res.render('map_toolbox');
});




module.exports = router;
