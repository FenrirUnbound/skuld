var expect = require('chai').expect;

describe('Player', function describePlayer() {
  var player;

  beforeEach(function () {
    player = require('../../lib/player');
  });

  afterEach(function () {
    player = null;
  });

  it('should be able to create a player', function testCreatePlayer(done) {
    player.createPlayer({
      playerId: 123
    })
    .then(function verify(data) {
      expect(data).to.deep.equal({
        id: 123
      });
    })
    .done(done);
  });
});
