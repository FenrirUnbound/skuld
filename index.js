var player = require('./lib/player');
var q = require('q');

function createGame(params, callback) {
  var gameId = params.gameId;
  return q(gameId)
  .then(function (gameId) {
    var game = {
      gameId: gameId,
      players: {},
      turns: {
        count: 0,
        order: [],
        rounds: 1
      }
    };

    return game;
  })
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
  createGame: createGame,
  joinGame: joinGame
};
