'use strict';
var Palindrome = (function () {
  var Palindrome = {
    constructor: function (message) {
      this.message = message.toLowerCase().replace(/[\\.&+%#*?\[^\]$()@{}=!<>|:,-\s]/g, '');
      this.arrayCheck = [];
    },
    isPalindrome: function () {
      if (!this.message) {
        return true;
      }
      dump(this.message);
      if(this.message.length === 1) {
        return true;
      }else {
        for (var i = 0; i < Math.floor((this.message.length / 2)); i++) {
          dump(i, this.message[i], this.message[this.message.length - (i+1)]);
          if(this.message[i] !== this.message[this.message.length - (i+1)]){
            return false;
          }
        }
        return true;
      }
    }
  };

  return Palindrome;
})();