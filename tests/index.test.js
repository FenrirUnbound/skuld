jest.dontMock('q');
jest.dontMock('..');
describe('Main', function describeMain() {
  var main;

  beforeEach(function () {
    main = require('..');
  });

  afterEach(function () {
    main = null;
  });

  pit('should be able to create a new game', function testCreateGame() {
    var testGameId = 321;

    return main.createGame({
      gameId: testGameId
    })
    .then(function verify(result) {
      expect(result).toEqual({
        gameId: 1
      });
      return 1;
    });
  });
});
