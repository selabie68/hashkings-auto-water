require('dotenv').config()
var cron = require('node-cron');
var steem = require('steem');

cron.schedule('0 1 * * *', () => {
    let json = {plants: process.env.HASHKINGS_PLOTS.split(',')};

    steem.broadcast.customJson(process.env.STEEM_POSTING_KEY, null, [process.env.STEEM_ACCOUNT], 'qwoyn_water', JSON.stringify(json), function(err, result) {
        console.log('error?', err);
        console.log('result?', result);
    });
})