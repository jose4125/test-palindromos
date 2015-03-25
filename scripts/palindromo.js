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
      //dump(this.message.length);
      if(this.message.length === 1) {
        return true;
      }else {
        for (var i = 0; i < this.message.length; i++) {
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