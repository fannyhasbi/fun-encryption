"use strict"

const btoa = require('btoa');
const MESSAGE = "HASBI";
const KEY = "HOKBEN";

var encrypt = (message, pattern) => {
  var result = [];
  /**
    * ASCII CAPITAL LETTER : 65 - 90
    */

  for(let i = 0; i < message.length; i++){
    let a = message.charCodeAt(i);
    let shifter = KEY.charCodeAt(Math.floor(i % KEY.length));
    result.push(a^shifter);
  }
  return btoa(result);
}

let secret = encrypt(MESSAGE, KEY);

console.log(secret);