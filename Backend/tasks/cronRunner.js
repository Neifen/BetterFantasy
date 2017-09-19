class CronRunner{

    constructor(){

        var CronJob = require('cron').CronJob;
        new CronJob('* * 1 * * *', function() {
            console.log('lets do this');
            var PlayersFetcher = require('./playersFetcher');
            new PlayersFetcher().fetchAll();

        }, function () {
            /* This function is executed when the job stops */
            //zb: uswertig vode date. (null wenn ich nüt wett mache)
        }, true, 'America/New_York');
    }

    //var CronJob = require('cron').CronJob;
}

module.exports = CronRunner;


