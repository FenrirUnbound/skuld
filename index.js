var q = require('q');

function createGame(params, callback) {
  return q(params)
  .then(function (params) {
    return params.gameId;
  })
  .then(function (gameId) {
    return {
      gameId: gameId
    };
  })
  .nodeify(callback);
}

module.exports = {
  createGame: createGame
};
