var config = {

    auth: {
        // user: process.env.GMAIL_ID,
        // pass: process.env.GMAIL_PASS
        user: 'prabhjot.nith@gmail.com',
        pass: 'J@Ipr@bh7001'
    },

    mLab: {
        // user: process.env.MLAB_ID,
        // pass: process.env.MLAB_PASS,
        user: 'prabhnith',
        pass: 'J@Ipr@bh563'
    },

    mailOptions : {
        from: 'prabhjot.nith@gmail.com', // sender address
        to: "", // list of receivers
        subject: 'Coin For Cash - Thanks for participating', // Subject line
        html: '<img src="https://raw.githubusercontent.com/Prabhnith/CoinForCash/master/public/images/bestWishes.jpg" alt="best Wishes for the event!!">'
    }
};
module.exports = config;