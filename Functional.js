function func(){

    const arr = [].slice.call(arguments); // array from the arguments passed

    console.log(arr);

}

func(1,2,3);


function sum(a){
    return function (b){

        return a + b;

    }
}

let addOne = sum(1);
console.log(addOne(2));


//task 1
function curry(func) {

    return function helper(...args) {

      if (func.length === args.length) {
        return func(...args);
      }

      return function (...newParams) {
        return helper(...args.concat(newParams));
      };

    };

}
  
function sum(a, b, c) {
    return a + b + c;
}
  
const csum = curry(sum);
console.log(csum(1)(2)(3)); // > 6
console.log(csum(1, 2)(3)); // > 6
console.log(csum(1)(2, 3)); // > 6
console.log(csum(1, 2, 3)); // > 6
  
// Task 2:
function compose(...funcs) {

    return function (x) {

        return funcs.reduceRight((val, func) => {

            return func(val);
        }, x);
    }
}
  
var addOne = (x) => x + 1;
var sqrt = (x) => x * x;
  
addOneSqrt = compose(sqrt, addOne);

console.log(addOneSqrt(1)); // > 4