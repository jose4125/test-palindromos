'use strict';
var Palindrome = (function () {
  var Palindrome = {
    constructor: function (message) {
      this.message = message.toLowerCase();
      this.arrayReverse = [];
      this.reverseMessage = '';
    },
    isPalindrome: function () {
      if (!this.message) {
        return true;
      }else {
        var arrayMessage = this.message.split('');
        for (var i = 0; i < arrayMessage.length; i++) {
          this.arrayReverse.unshift(arrayMessage[i]);
        }
        this.reverseMessage = this.arrayReverse.join('');
        dump(this.reverseMessage);
        return this.message === this.reverseMessage;
      }
    }
  };

  return Palindrome;
})();