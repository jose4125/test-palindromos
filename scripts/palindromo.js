'use strict';
var Palindrome = (function () {
  var Palindrome = {
    constructor: function (message) {
      this.message = message;
      this.arrayCheck = [];
      this.message = this.lowerCase(this.message);
      this.message = this.removeSpecialCharacters(this.message);
    },
    lowerCase: function (message) {
      return message.toLowerCase();
    },
    removeSpecialCharacters: function (message) {
      return message.replace(/[\\.&+%#*?\[^\]$()@{}=!<>|:,-\s]/g, '');
    },
    isPalindrome: function () {
      if (!this.message) {
        return true;
      }
      dump(this.message);
      if (this.message.length === 1) {
        return true;
      } else {
        for (var i = 0; i < Math.floor((this.message.length / 2)); i++) {
          dump(i, this.message[i], this.message[this.message.length - (i + 1)]);
          if (this.message[i] !== this.message[this.message.length - (i + 1)]) {
            return false;
          }
        }
        return true;
      }
    }
  };

  return Palindrome;
})();