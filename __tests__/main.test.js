var mainPathfile = '..';

jest.dontMock(mainPathfile);
describe('Main', function describeMain() {
  it('should be able to require', function testSanity() {
    var main = require(mainPathfile);
    expect(main).toBeTruthy();
  });
});
