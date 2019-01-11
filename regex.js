const now = require("performance-now")
const string = 'The quick brown fox jumps over the fallen tree'
const search = /fox/gi;
const replace = 'bunny';

var t0 = now();

for (let i=0; i<1000000; i++) {
  string.replace(search, replace);
}

var t1 = now();

console.log("Took " + (t1 - t0) + " milliseconds.")