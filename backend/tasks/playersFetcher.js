class PlayersFetcher{

    fetchAll(){

        const fetch = require('node-fetch');
        fetch('http://api.fantasy.nfl.com/v1/players/stats?position=QB')
            .then(function(res) {
                return res.json();
            }).then(function(json) {
            const PlayersSaver = require('./playersSaver');
            new PlayersSaver().save(json.players);
        });
    }



}

module.exports = PlayersFetcher;