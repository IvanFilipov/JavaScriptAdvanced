
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


//Prototypal inheritance

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

