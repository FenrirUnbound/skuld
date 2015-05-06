jest.dontMock('q');
jest.dontMock('../../lib/player');
describe('Player', function describePlayer() {
  var player;

  beforeEach(function () {
    player = require('../../lib/player');
  });

  afterEach(function () {
    player = null;
  });

  pit('should be able to create a player', function testCreatePlayer() {
    return player.createPlayer({
      playerId: 123
    })
    .then(function verify(data) {
      expect(data).toEqual({
        id: 123
      });
    });
  });
});
