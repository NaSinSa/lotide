const assertEqual = require("../assertEqual");
const tail = require("../tail");

const words = [];
console.log(tail(words));
console.log(assertEqual(words.length, 0));