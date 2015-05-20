var expect = require('chai').expect;

describe('Game', function describeGame() {
  var main;

  beforeEach(function () {
    main = require('../../lib/game');
  });

  it('creates a game', function testCreateGame(done) {
    var gameId = 1234;
    var expectedResult = {
      gameId: gameId,
      players: {},
      turns: {
        count: 0,
        order: [],
        rounds: 1
      }
    };

    main.createGame(gameId)
    .then(function (gameState) {
      expect(gameState).to.deep.equal(expectedResult);
    })
    .finally(done);
  });
});
