var q = require('q');

function createGame(params, callback) {
  return q(params)
  .then(function (params) {
    return {
      gameId: params.gameId,
      playerId: params.playerId
    };
  })
  .then(function (gameInfo) {
    var game = {
      gameId: gameInfo.gameId,
      players: {}
    };

    game.players[gameInfo.playerId] = {};

    return game;
  })
  .nodeify(callback);
}

module.exports = {
  createGame: createGame
};
