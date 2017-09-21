class PlayersGateway {

    constructor() {

        const express = require('express');
        const MongoClient = require('mongodb').MongoClient;

        const app = express();
        const uri = "mongodb://neifen:056f6vf3@ds141024.mlab.com:41024/heroku_056f6vf3";

        app.use(function(req, res, next) {
            const origin = req.get('origin');

            // TODO Add origin validation
            res.header("Access-Control-Allow-Origin", origin);
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        app.get('/', function appCallback(req, response) {

            MongoClient.connect(uri, function connectionCallback(err, db) {
                if (err) throw err;

                db.collection('players').find({}, {
                    "id": 1,
                    "name": 1
                }).toArray(function dbCallback(err, result) {
                    if (err) throw err;

                    response.send(result);

                    db.close();
                });
            });
        });

        app.listen(3030)
    }
}
module.exports = PlayersGateway;
