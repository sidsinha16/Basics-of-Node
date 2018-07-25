var test = require('./Test');
var test2 = require('./Test2');

Module Exports
console.log(test.passVari1([])); // 0
console.log(test.passVari1(["Apple",1])); // 2
console.log(test.passVari1(["Apple","orange",2])); // 3

console.log(test2.arrayPop([])); // using test2
