var config = {

    auth: {
        user: process.env.GMAIL_ID,
        pass: process.env.GMAIL_PASS
    },

    mLab: {
        user: process.env.MLAB_ID,
        pass: process.env.MLAB_PASS,
    },

    mailOptions : {
        from: 'prabhjot.nith@gmail.com', // sender address
        to: "", // list of receivers
        subject: 'Coin For Cash - Thanks for participating', // Subject line
        html: '<img src="https://raw.githubusercontent.com/Prabhnith/CoinForCash/master/public/images/bestWishes.jpg" alt="best Wishes for the event!!">'
    }
};
module.exports = config;