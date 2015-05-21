var Game = require('./game');
var Player = require('./player');
var Promise = require('bluebird');

function Client(gameId, playerId) {
  this.game = Game.createGame(gameId);
  this.self = Player.createPlayer({
    playerId: playerId
  });
}

module.exports = function (gameId, playerId) {
  if (gameId === undefined || gameId === null) {
    throw new Error('No gameId provided to Client constructor');
  }

  return new Client(gameId, playerId);
};
