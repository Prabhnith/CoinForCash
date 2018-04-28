var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.get('/', function(req, res, next) {
  
  User.find({}, function (err, users) {
    if (err) throw err;

    console.log(users);
    res.render('index', {winTable:users});

  });
});

module.exports = router;
