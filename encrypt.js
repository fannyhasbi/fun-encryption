/**
  * @author Fanny Hasbi
  * @website https://fannyhasbi.id
  */

"use strict"

const atob = require('atob');
const btoa = require('btoa');

const MESSAGE = "FANNYHASBI";
const KEY = "FUN";

const FunEncrypt = {
  encrypt: (message, key) => {
    var result = [];
    for(let i = 0; i < message.length; i++){
      let a = message.charCodeAt(i);
      let shifter = key.charCodeAt(Math.floor(i % key.length));
      result.push(a^shifter);
    }
    return btoa(result);
  },

  decrypt: (secret, key) => {
    secret = atob(secret).split(",");
    var result = [];

    secret.forEach((e, i) => {
      let shifter = key.charCodeAt(Math.floor(i % key.length));
      let b = String.fromCharCode(e ^ shifter);

      result.push(b);
    });

    return result.join("");
  }
}

let secret = FunEncrypt.encrypt(MESSAGE, KEY);
let origin = FunEncrypt.decrypt(secret, KEY);

console.log(secret);
console.log(origin);