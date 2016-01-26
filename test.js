var chai = require('chai');

var joinStrings = require('./index');

var expect = chai.expect;

describe('joinStrings(strings, separator|options)', function() {
  var strings = ['hello', 'world'];

  it('returns a string', function() {
    expect(joinStrings(strings)).to.be.a('string');
  });

  describe('with a single string', function() {
    it('returns the string', function() {
      var result = joinStrings('hello');
      expect(result).to.be.a('string');
      expect(result).to.equal('hello');
    });
  });

  describe('with no separator or options', function() {
    it('returns the concatenated string', function() {
      expect(joinStrings(strings)).to.equal('helloworld');
    });
  });

  describe('with a separator', function() {
    it('returns the joined string', function() {
      expect(joinStrings(strings, ',')).to.equal('hello,world');
    });
  });

  describe('with options', function() {
    it('returns the joined string', function() {
      expect(joinStrings(strings, { separator: ',' })).to.equal('hello,world');
    });
  });
});
