var express = require('express');
var router = express.Router();
var User = require('../models/User');
var nodemailer = require('nodemailer');
var config = require('./../config');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.auth.user,
    pass: config.auth.pass
  }
});

router.post('/', function (req, res, next) {

  console.log('POST data :', req.body);

  User.findOneAndUpdate({ mobile: req.body.mobile },
    { "$addToSet": { amount: req.body.amount }, $inc: { count: 1 } },
    { new: true }, function (err, doc) {
      if (err) throw err;
      
      if (doc) {
        console.log("UPDATED::", doc);
      }

      else {
        var newUser = User(req.body);
        newUser.save(function (err) {
          if (err) throw err;
          console.log('User created!');
          const mailOptions = {
            from: 'prabhjot.nith@gmail.com', // sender address
            to: req.body.email, // list of receivers
            subject: 'Coin For Cash - Thanks for participating', // Subject line
            html: '<img src="https://raw.githubusercontent.com/Prabhnith/CoinForCash/master/public/images/bestWishes.jpg" alt="best Wishes for the event!!">' 
          };

          transporter.sendMail(mailOptions, function (err, info) {
            if (err)
              console.log(err)
            else
              console.log(info);
          });
        });
      };
    });

  res.redirect("/success");
});

module.exports = router;
