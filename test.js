var chai = require('chai');

var joinStrings = require('./index');

var expect = chai.expect;

describe('joinStrings(delimiter|options, [string]|string...)', function() {
  var strings = ['hello', 'world'];

  it('returns a string', function() {
    expect(joinStrings(',', strings)).to.be.a('string');
  });

  describe('with a single string', function() {
    it('returns the string', function() {
      expect(joinStrings(',', 'hello')).to.equal('hello');
    });
  });

  describe('with multiple strings', function() {
    it('returns the strings joined', function() {
      expect(joinStrings(',', 'hello', 'world')).to.equal('hello,world');
    });
  });

  describe('with a delimiter', function() {
    it('returns the string joined with the provided demiliter', function() {
      expect(joinStrings(',', strings)).to.equal('hello,world');
    });
  });

  describe('with empty options', function() {
    it('returns the joined string without delimiter, prefix or suffix', function() {
      expect(joinStrings({}, strings)).to.equal('helloworld');
    });
  });

  describe('with options', function() {
    it('returns the string joined with the provided delimiter', function() {
      expect(joinStrings({ delimiter: ',' }, strings)).to.equal('hello,world');
    });

    it('returns the string joined and prefixed with the provided prefix', function() {
      expect(joinStrings({ prefix: '>' }, strings)).to.equal('>helloworld');
    });

    it('returns the string joined and suffixed with the provided suffix', function() {
      expect(joinStrings({ suffix: '!' }, strings)).to.equal('helloworld!');
    });
  });
});
