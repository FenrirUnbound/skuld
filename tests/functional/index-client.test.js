var expect = require('chai').expect;
var promise = require('bluebird');

describe('Main -- Client', function describeMainClient() {
  var main;

  beforeEach(function () {
    main = require('../..');
  });

  afterEach(function () {
    main = null;
  });

  it('creates a game client', function testSanity(done) {
    var client = main.createClient(1, 2);
    var expectedGameState = {
      gameId: 1,
      players: {},
      turns: {
        count: 0,
        order: [],
        rounds: 1
      }
    };

    expect(client).to.be.an('object');

    promise.props({
      game: client.game,
      self: client.self
    })
    .then(function (result) {
      expect(result.game).to.deep.equal(expectedGameState);
      expect(result.self).to.deep.equal({
        id: 2
      });
    })
    .finally(done);
  });

  it('fails when not given a gameId', function failNoGameId() {
    expect(main.createClient).to.throw('No gameId provided to Client constructor');
  });

  describe('End Turn', function describeEndTurn() {
    var client;

    beforeEach(function () {
      client = main.createClient(1);
    });

    it.skip('it ends the turns', function testEndTurn() {
      client.endTurn();
    });
  });
});
