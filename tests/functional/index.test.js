jest.autoMockOff();
describe('Main', function describeMain() {
  var main;

  beforeEach(function () {
    main = require('..');
  });

  afterEach(function () {
    main = null;
  });

  pit('should create a new game', function testCustomCreateGame() {
    var testGameId = 2015;
    return main.createGame({
      gameId: testGameId
    })
    .then(function verify(result) {
      expect(result.gameId).toEqual(testGameId);
      expect(result.players).toEqual({});
      expect(result.turns.count).toEqual(0);
      expect(result.turns.order).toEqual([]);
      expect(result.turns.rounds).toEqual(1);
    });
  });

  pit('should be able to join a game', function testJoinGame() {
    var testGameId = 101;
    var testPlayerId = 9001;

    return main.createGame({
      gameId: testGameId
    })
    .then(function joinGame(game) {
      return main.joinGame(game, {
        playerId: testPlayerId
      });
    })
    .then(function verify(result) {
      expect(result.gameId).toEqual(testGameId);
      expect(result.players).toEqual({
        9001: {}
      });
      expect(result.turns.order).toEqual([testPlayerId]);
    });

  });

});
