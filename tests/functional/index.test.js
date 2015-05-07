var expect = require('chai').expect;

describe('Main', function describeMain() {
  var main;

  beforeEach(function () {
    main = require('../..');
  });

  afterEach(function () {
    main = null;
  });

  it('should create a new game', function testCustomCreateGame(done) {
    var testGameId = 2015;

    main.createGame({
      gameId: testGameId
    })
    .then(function verify(result) {
      expect(result).to.have.property('gameId')
        .that.is.equal(testGameId);
      expect(result).to.have.property('players')
        .that.is.an('object');
      expect(result).to.have.property('turns');
      expect(result.turns).to.have.property('count')
        .that.is.equal(0);
      expect(result.turns).to.have.property('order')
        .that.deep.equals([]);
      expect(result.turns).to.have.property('rounds')
        .that.equal(1);
    })
    .done(done);
  });


  it('should be able to join a game', function testJoinGame(done) {
    var testGameId = 101;
    var testPlayerId = 9001;

    main.createGame({
      gameId: testGameId
    })
    .then(function joinGame(game) {
      return main.joinGame(game, {
        playerId: testPlayerId
      });
    })
    .then(function verify(result) {
      expect(result).to.have.property('gameId')
        .to.equal(testGameId);
      expect(result).to.have.property('players')
        .to.deep.equal({
          9001: {}
        });
      expect(result.turns).to.have.property('order')
        .to.deep.equal([
          testPlayerId
        ]);
    })
    .done(done);
  });

});
