var mainPathfile = '..';

jest.dontMock('q');
jest.dontMock(mainPathfile);
describe('Main', function describeMain() {
  var main;

  beforeEach(function () {
    main = require(mainPathfile);
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
    });
  });
});
