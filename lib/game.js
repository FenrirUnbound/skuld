var Promise = require('bluebird');

function createGame(gameId) {
  return Promise.resolve(gameId)
  .then(function makeGame(gameId) {
    return {
      gameId: gameId,
      players: {},
      turns: {
        count: 0,
        order: [],
        rounds: 1
      }
    };
  });
}

module.exports = {
  createGame: createGame
};
