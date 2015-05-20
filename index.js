var game = require('./lib/game');
var player = require('./lib/player');
var q = require('q');

function createGame(params, callback) {
  var gameId = params.gameId;
  return q(gameId)
  .then(game.createGame)
  .nodeify(callback);
}

function joinGame(game, params, callback) {
  var playerId = params.playerId;

  return q({
    playerId: playerId
  })
  .then(player.createPlayer)
  .then(function addPlayer(playerData) {
    game.players[playerId] = playerData;
    game.turns.order.push(playerId);

    return game;
  })
  .nodeify(callback);
}

module.exports = {
  createClient: require('./lib/client'),
  createGame: createGame,
  joinGame: joinGame
};
