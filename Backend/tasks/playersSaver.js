class PlayersFetcher {

    save(players){
        var MongoClient = require('mongodb').MongoClient;
        var uri = "mongodb://fs143007:056f6vf3@ds141024.mlab.com:41024/heroku_056f6vf3";

        MongoClient.connect(uri, function(err, db) {
            if(!err) {
                console.log('we are connected');
            }

            db.collection('players').updateMany(players);
            db.close();
        });
    }

}

module.exports = PlayersFetcher;