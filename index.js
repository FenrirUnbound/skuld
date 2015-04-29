var q = require('q');

function createGame(params, callback) {
  return q()
  .then(function (initialValue) {
    return {
      gameId: 1
    };
  })
  .nodeify(callback);
}

module.exports = {
  createGame: createGame
};
