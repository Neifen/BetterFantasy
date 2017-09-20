class PlayersGateway {

    constructor() {

        const express = require('express');
        const MongoClient = require('mongodb').MongoClient;

        const app = express();
        const uri = "mongodb://neifen:056f6vf3@ds141024.mlab.com:41024/heroku_056f6vf3";

        app.get('/', this.appCallback);

        app.listen(3030)
    }


    appCallback(req, response) {
        MongoClient.connect(uri, function connectionCallback(err, db) {
            if (err) throw err;
            console.log('we are connected');

            db.collection('players').find({}, {
                "id": 1,
                "name": 1
            }).toArray(function dbCallback(err, result) {
                if (err) throw err;

                response.send(result);

                db.close();
            });

        });

    }
}
module.exports = PlayersGateway;
