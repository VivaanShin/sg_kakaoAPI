var express = require('express');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();

var API_Call = require('../service/API_Call')('oauth');
var resultData = {};


/* GET home page. */
router.get('/kakao', async function(req, res, next) {
    API_Call.login(function(err, result){
        console.log(result)
    })
  
});

router.get('/kakao/callback', function(req, res, next) {
    console.log("/kauth/kakao/callback in")
    console.log(res.query.code)
});


module.exports = router;
