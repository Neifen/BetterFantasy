class PlayersGateway {

    constructor() {

        var express = require('express');
        var app = express();

        app.get('/', function (req, response) {

            var MongoClient = require('mongodb').MongoClient;
            var uri = "mongodb://neifen:056f6vf3@ds141024.mlab.com:41024/heroku_056f6vf3";
            MongoClient.connect(uri, function(err, db) {
                if (err) {
                    console.error('not connected:');
                    console.error(err);
                } else {
                    console.log('we are connected');

                    db.collection('players').find({},{"id":1,"name":1}).toArray(function(err, result) {
                        if (err) throw err;

                        response.send(result);

                        db.close()
                    });

                }
            });

        });

        app.listen(3030)
    }
}
module.exports = PlayersGateway;
