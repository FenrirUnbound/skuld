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
    });
  });

});
