//WebServices
var PlayersGateway = require('./players/playersGateway');
new PlayersGateway();

//Cron
var Starter = require('./tasks/cronRunner');
new Starter();
var PlayersFetcher = require('./tasks/playersFetcher');
new PlayersFetcher().fetchAll();