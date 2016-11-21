var express = require('express');
var basicAuth = require('../auth/basic');

var router = express.Router();

/* GET home page. */
router.get('/', basicAuth.isAuthenticated, function(req, res, next) {
    console.log(req.user);
  res.render('index', { title: 'Express', userInfo : req.user });
});

module.exports = router;
