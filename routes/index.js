var express = require('express');
var router = express.Router();
var User = require('../models/User');
var Winners = require('../models/Winners');

router.get('/', function(req, res, next) {

  Winners.find({}, function (err, users) {
    if (err) throw err;

    console.log(users);
    let rulesTab = {
      amount:[300,200,100,30,20,10],
      won:[5000,2000,1000,500,200,100],
      participate:[100,20,10,0,0,0]
    }
    res.render('index', {winTable:users, rules:rulesTab});

  });
});

module.exports = router;
