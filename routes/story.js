var express = require('express');
var request = require('request');
var session = require('express-session');
var flash = require('connect-flash');
var router = express.Router();

var API_Call = require('../service/API_Call')('kakao');
var resultData = {};
/* GET home page. */
router.get('/check', async function(req, res, next) {
    await API_Call.story_check(function(err, result){
        try{
            console.log("result:", result);
           //resultData.story_check = res.json(result);
            //console.log(resultData);
            
            
        } catch {
            res.json(err);
            resultData.story_check = "err"
        }finally{
            res.render('story', { title: 'Express' });              
                               }
    })
  
});

module.exports = router;
