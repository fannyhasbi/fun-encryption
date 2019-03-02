"use strict"

const atob = require('atob');
const btoa = require('btoa');
const MESSAGE = "HASBI";
const KEY = "HOKBEN";

var encrypt = (message, key) => {
  var result = [];
  /**
    * ASCII CAPITAL LETTER : 65 - 90
    */

  for(let i = 0; i < message.length; i++){
    let a = message.charCodeAt(i);
    let shifter = key.charCodeAt(Math.floor(i % key.length));
    result.push(a^shifter);
  }
  return btoa(result);
}

var decrypt = (secret, key) => {
  var secret = atob(secret).split(",");
  var result = [];

  secret.forEach((e, i) => {
    let shifter = key.charCodeAt(Math.floor(i % key.length));
    let b = String.fromCharCode(e ^ shifter);

    result.push(b);
  });

  return result.join("");
}

let secret = encrypt(MESSAGE, KEY);
let origin = decrypt(secret, KEY);

// console.log(secret);
console.log(origin);