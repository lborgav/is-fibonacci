'use strict';

var numberIsInteger = require('number-is-integer');
var isSquare = require('is-square');

// https://en.wikipedia.org/wiki/Fibonacci_number#Recognizing_Fibonacci_numbers
function isFibo (n) {
  if ( isSquare(5*n*n+4) || isSquare(5*n*n-4) ) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = function (n) {
  if (typeof n !== 'number') {
    throw new TypeError('Expected a number');
  }
  if(n<=0) {
    throw new Error('The number must be a positive integer');
  }
  if(!numberIsInteger(n)){
    throw new Error('The number must be a integer');
  }
  return isFibo(n);
};
