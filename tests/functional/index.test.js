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
    var testPlayerId = 12;
    return main.createGame({
      gameId: testGameId,
      playerId: testPlayerId
    })
    .then(function verify(result) {
      expect(result.gameId).toEqual(testGameId);
      expect(result.players).toEqual({
        12: {}
      });
      expect(result.turns.count).toEqual(0);
      expect(result.turns.order).toEqual([
        testPlayerId
      ]);
    });
  });

});
