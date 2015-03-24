'use strict';
var expect = chai.expect;

describe('Palindromos', function () {
  var palindrome;
  before(function () {
    palindrome = Object.create(Palindrome);
  });
  context('when is a empty string or a single word', function () {
    it('should return true if is an empty string', function () {
      palindrome.constructor('');
      expect(palindrome.isPalindrome()).to.be.true;
    });
  });
});



describe.skip('Test', function () {

  describe('#indexOf()', function () {
    context('when not present', function () {
      it('should not throw an error', function () {
        (function () {
          [1, 2, 3].indexOf(4);
        }).should.not.throw();
      });
      it('should return -1', function () {
        [1, 2, 3].indexOf(4).should.equal(-1);
      });
    });
    context('when present', function () {
      it('should return the index where the element first appears in the array', function () {
        [1, 2, 3].indexOf(3).should.equal(2);
      });
    });
  });
});
