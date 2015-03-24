'use strict';
var expect = chai.expect;

describe('Palindromos', function () {
  var palindrome;
  before(function () {
    palindrome = Object.create(Palindrome);
  });
  context('when is a empty string or a single character', function () {
    it('should return true if is an empty string', function () {
      palindrome.constructor('');
      expect(palindrome.isPalindrome()).to.be.true;
    });
    it('should return true if is a single character', function () {
      palindrome.constructor('a');
      expect(palindrome.isPalindrome()).to.be.true;
    });
  });
  context('when is more than one character', function () {
    it('should return false when the string have two differents characters', function () {
      palindrome.constructor('ab');
      expect(palindrome.isPalindrome()).to.be.false;
    });
    it('should return true with "radar" string', function () {
      palindrome.constructor('radar');
      expect(palindrome.isPalindrome()).to.be.true;
    });
    it('should return false, not every word that begins and ends with same letter is palindrome', function () {
        palindrome.constructor('reader');
        expect(palindrome.isPalindrome()).to.be.false;
    });
  })
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
