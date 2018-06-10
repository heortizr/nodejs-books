"use strict";

function add(a, b) {
  return a + b;
}

function add(a, b, callback) {
  callback(a + b); //continuation-passing style
  //process.nextTick(() => callback(a + b)); // execute in the next loop
}

console.log('before');
add(1, 2, result => console.log('Result: ' + result));
console.log('after');
