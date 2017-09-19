class PlayersFetcher {

    save(players){
        var MongoClient = require('mongodb').MongoClient;
        var uri = "mongodb://neifen:056f6vf3@ds141024.mlab.com:41024/heroku_056f6vf3";

        MongoClient.connect(uri, function(err, db) {
            if(err) {
                console.error('not connected:');
                console.error(err);
            }else {
                console.log('we are connected');

                var updatedDocuments = 0 ;

                players.forEach(function (player) {
                    db.collection('players').updateOne({id: player.id}, player, {upsert: true}, function(err, res) {
                        updatedDocuments++;
                        if (err) {
                            throw err;
                        }

                        if(updatedDocuments===players.length){
                            console.log(updatedDocuments + " document(s) updated");
                            db.close();
                        }
                    });
                });
            }
        });
    }

}

module.exports = PlayersFetcher;