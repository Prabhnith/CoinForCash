var express = require('express');
var router = express.Router();
var User = require('../models/User');
var Winners = require('../models/Winners');
var Viewers = require('../models/Viewers');

router.get('/', function(req, res, next) {

  // Viewers.findOneAndUpdate({ _id: "5ae84cf4af4d85182485126f" },    //local
  Viewers.findOneAndUpdate({ _id: "5ae87d2a09bef532ecb547a5" },       //mLab
    { $inc: { count: 1 } }, { new: true }, function (err, doc) {
      if(err) throw err;
      console.log(doc);
  });

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
