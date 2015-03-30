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
    messageLength: function () {
      return this.message.length;
    },
    middleMessageLength: function () {
      return Math.floor((this.messageLength() / 2));
    },
    getLeftCharacter: function (index) {
      return this.message[index];
    },
    getRightCharacter: function (index) {
      return this.message[this.messageLength() - (index + 1)];
    },
    verifyEnds: function (index) {
      if (this.getLeftCharacter(index) !== this.getRightCharacter(index)) {
        return false;
      }
      return true;
    },
    aechEnds: function () {
      var isEqual;
      for (var i = 0; i < this.middleMessageLength(); i++) {
        //dump(i, this.message[i], this.message[this.message.length - (i + 1)]);
        isEqual = this.verifyEnds(i);
      }
      dump('palindrome ' + isEqual);
      return isEqual;
    },
    isPalindrome: function () {
      if (!this.message) {
        return true;
      }
      dump(this.message);
      if (this.messageLength() === 1) {
        return true;
      } else {
        return this.aechEnds();
      }
    }
  };

  return Palindrome;
})();