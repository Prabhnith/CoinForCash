var User = require('./models/User');
var Winners = require('./models/Winners');
var Viewers = require('./models/Viewers');

var dummyDB = {

    newUsers: [{
        "name": "Prabhjot Singh",
        "mobile": 9805830801,
        "amount": 300,
        "email": "prabhjot.nith@gmail.com"
    }, {
        "name": "Paramjit Singh",
        "mobile": 9805830802,
        "amount": 200,
        "email": "prabhjot.nith@gmail.com"
    }, {
        "name": "Pooja Chavan",
        "mobile": 9805830803,
        "amount": 100,
        "email": "prabhjot.nith@gmail.com"
    }, {
        "name": "Pihu",
        "mobile": 9805830804,
        "amount": 30,
        "email": "prabhjot.nith@gmail.com"
    }],

    newWinners: [{
        "name": "Prabhjot Singh",
        "mobile": 9805830801,
        "amount": 300,
        "email": "prabhjot.nith@gmail.com"
    }, {
        "name": "Paramjit Singh",
        "mobile": 9805830802,
        "amount": 200,
        "email": "prabhjot.nith@gmail.com"
    }, {
        "name": "Pooja Chavan",
        "mobile": 9805830803,
        "amount": 100,
        "email": "prabhjot.nith@gmail.com"
    }],

    populateData: function () {

        User.insertMany(dummyDB.newUsers, (err, doc) => {
            if (err) {
                console.log("USERS ALREADY IN THE DB ,", err);
            }
            else {
                console.log("USERS INSERTED : ", doc);
            }
        });

        Winners.insertMany(dummyDB.newWinners, (err, doc) => {
            if (err) {
                console.log("USERS ALREADY IN THE DB ,", err);
            }
            else {
                console.log("USERS INSERTED : ", doc);
            }
        });

        Viewers.insertMany([{ count: 10000 }], (err, doc) => {
            if (err) {
                console.log("USERS ALREADY IN THE DB ,", err);
            }
            else {
                console.log("VIEWERS : ", doc._id);
            }
        });
    }
};
module.exports = dummyDB;