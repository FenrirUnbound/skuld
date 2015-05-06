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

module.exports = {
  createGame: createGame
};
