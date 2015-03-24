'use strict';
var Palindrome = (function () {
  var Palindrome = {
    constructor: function (message) {
      this.message = message;
    },
    isPalindrome: function () {
      if (!this.message) {
        return true;
      }
    }
  };

  return Palindrome;
})();