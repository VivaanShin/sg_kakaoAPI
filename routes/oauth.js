var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req)
  res.render('oauth', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    console.log(req)
  res.render('oauth', { title: 'Express' });
});

module.exports = router;
