var express = require('express');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();
var resultData = {};
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("req.session\n", req.session);
    if(req.session.token != null){
        resultData.login_check = "현재 로그인 상태입니다.";
        res.render('index', resultData);
    }else{
        resultData.login_check = "현재 비로그인 상태입니다.";
        res.render('index', resultData);
    }
  resultData;
});

module.exports = router;
