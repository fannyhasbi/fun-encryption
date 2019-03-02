"use strict"

const btoa = require('btoa');

const MESSAGE = "HASBI";
const KEY = "HAZ";

var encrypt = (message, pattern) => {
  var result = [];

  /**
    * ASCII CAPITAL LETTER : 65 - 90
    */


  for(let i = 0; i < message.length; i++){
    let a = message.charCodeAt(i);
    // let b = String.fromCharCode(a);

    let shifter = KEY.charCodeAt(Math.floor(i % KEY.length));

    let xor = a ^ shifter;

    result.push(xor);
  }

  return result;
}

var encode = (data) => {
  // console.log(btoa(data));
  // console.log(data);

  return btoa(data);
}

let encrypted = encrypt(MESSAGE, KEY);
let result = encode(encrypted);

console.log(result);