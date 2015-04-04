'use strict';
var Palindrome = (function () {
  var _message = '';
  //var arrayCheck = [];
  function constructor(text) {
    _message = text;
    _message = _lowerCase(_message);
    _message = _removeSpecialCharacters(_message);
  }
  function _lowerCase(message) {
    return message.toLowerCase();
  }
  function _removeSpecialCharacters(message) {
    return message.replace(/[\\.&+%#*?\[^\]$()@{}=!<>|:,-\s]/g, '');
  }
  function _messageLength() {
    return _message.length;
  }
  function _middleMessageLength() {
    return Math.floor((_messageLength() / 2));
  }
  function _getLeftCharacter(index) {
    return _message[index];
  }
  function _getRightCharacter(index) {
    return _message[_messageLength() - (index + 1)];
  }
  function _verifyEnds(index) {
    if (_getLeftCharacter(index) !== _getRightCharacter(index)) {
      return false;
    }
    return true;
  }
  function _aechEnds() {
    var isEqual;
    for (var i = 0; i < _middleMessageLength(); i++) {
      //dump(i, message[i], message[message.length - (i + 1)]);
      isEqual = _verifyEnds(i);
    }
    dump('palindrome ' + isEqual);
    return isEqual;
  }
  function isPalindrome() {
    if (!_message) {
      return true;
    }
    if (_messageLength() === 1) {
      return true;
    } else {
      return _aechEnds();
    }
  }

  return {
    constructor: constructor,
    isPalindrome: isPalindrome
  };
})();