'use strict';
var assert = require('assert');
var isFibonacci = require('./');

it('should return true because 1 is a fibonacci number', function () {
  assert.strictEqual(isFibonacci(1), true);
});

it('should return true because 2 is a fibonacci number', function () {
  assert.strictEqual(isFibonacci(2), true);
});

it('should return true because 3 is a fibonacci number', function () {
  assert.strictEqual(isFibonacci(3), true);
});

it('should return true because 5 is a fibonacci number', function () {
  assert.strictEqual(isFibonacci(5), true);
});

it('should return false because 7 is not a fibonacci number', function () {
  assert.strictEqual(isFibonacci(7), false);
});

it('should return true because 8 is a fibonacci number', function () {
  assert.strictEqual(isFibonacci(8), true);
});

it('should return false because 3441 is not a fibonacci number', function () {
  assert.strictEqual(isFibonacci(3441), false);
});
