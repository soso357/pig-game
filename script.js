'use strict';

console.log(me);
//console.log(job);
//console.log(year);

var me = 'jonas';
let job = 'teacher';
const year = 1991;
// function
console.log(adddecl(2, 3));
console.log(addexpr(2, 3));
console.log(addarow(2, 3));

function adddecl(a, b) {
  return a + b;
}

const addexpr = function (a, b) {
  return a + b;
};

const addarow = (a, b) => a + b;
