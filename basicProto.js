function Point(x,y){

    this.x = x;
    this.y = y;

    /*
    this.add = function (pnt){ //each pnt will have it's own add function

        this.x += pnt.x;
        this.y += pnt.y;
    }
   */
}

Point.prototype.add = function (pnt){ //only one function for all Point objects

        this.x += pnt.x;
        this.y += pnt.y;
}


//Prototype inheritance

function Person(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
};

Person.prototype.getName = function(){

    return this.name.first + ' ' + this.name.last;

}

function Teacher(first, last, age, gender, interests,subject){

    Person.call(this,first, last, age, gender, interests);

    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype); //connects the prototypes
Teacher.prototype.constructor = Teacher; //teacher using its own ctor

let t = new Teacher('peshe','petrov',35,'f','any',);

//console.log(t.getName());


//ECMAScript6 OOP style

class Car{

    constructor(brand,price){

        this.brand = brand;
        this.price = price;

        const year = 1995;  

    // use a closure to access the "private" property private
    // this is NOT A GETTER! getMoney is a key added to the current context
    // (not to its prototype) that will hold a reference to a function!
        this.getYear = function () {
            return year;
        };
    }


    //a key added to Car's prototype ,which is a reference to a function
    getBrand (){

        return this.brand;
    }

}

class SportCar extends Car{

    constructor(brand,price,hp){

        super(brand,price); // same as Car.call(this,brand,price)

        this.hp = hp;

    }

    callSuperGetBrand(){

        return super.getBrand();

    }

    getBrand(){ //hides the super's getBrand

        return this.brand;
    }

}


const bugatti = new SportCar('bugatti',200000,1350);

console.log(bugatti.getBrand());
console.log(bugatti.callSuperGetBrand());
console.log(bugatti.getYear());
