// the class to which we want to add properties
class destClass {
    constructor () {
      console.log('construct an object');
      this.somevar = 42;
    }
}
  
// now we use ES5 syntax here to get
// an enumerable property
// as all ES6 class definitions are
// non-enumerable by default and
// would not work with Object.assign
let srcClass = class { };
  
//adding new method to the source class prototype

srcClass.prototype.method = function () {
    console.log(`i knoo hau 2 use [${this.somevar}]`);
}
  
  
// no instancing from the mixin directly
let s = new srcClass();
s.method(); //has the method, but hasn't 'somevar'
  
let d = new destClass();

//t has no property 'method', so trying to call it 
//will result into throwing exception
try {
    d.method()
} 
catch (e) {
    console.warn('okay, were now totally convinced')
}
  
//  quick way to mixin the entire class
//  back in ES5 we used to do it with forloop
Object.assign(destClass.prototype, srcClass.prototype);

//now the two prototypes are mixed into destClass
  
// now d has this method()
d.method();
  
// now this new d2 guy will have it also, as we
// mixed in the srcClass's proto, thus all its members 
let d2 = new destClass();
d2.method();