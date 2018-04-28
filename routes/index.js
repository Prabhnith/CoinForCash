var express = require('express');
var router = express.Router();
var User = require('../models/User');
var Winners = require('../models/Winners');

router.get('/', function(req, res, next) {

  var Winner = Winners({
    mobile: 9805830800,
    amount: 300,
    email: "prabhjot.nith@gmail.com"
  });

  Winner.save(function (err) {
    console.log("Winner Adding.....");
    if(err) throw err;
    console.log("Winner Added");
  });

  User.find({}, function (err, users) {
    if (err) throw err;

    console.log(users);
    res.render('index', {winTable:users});

  });
});

module.exports = router;
