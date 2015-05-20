var Game = require('./game');
var Promise = require('bluebird');

function Client(gameId) {
  this.game = Game.createGame(gameId);
}

module.exports = function (gameId) {
  if (gameId === undefined || gameId === null) {
    throw new Error('No gameId provided to Client constructor');
  }

  return new Client(gameId);
};
