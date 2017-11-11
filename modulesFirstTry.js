const myLib = require("./MyLib/myLib.js");

const res = myLib.sum(5,10);
console.log(res);

const result = myLib.fillWith([1, 2, 3], 'a', 0, 3);
console.log(result);