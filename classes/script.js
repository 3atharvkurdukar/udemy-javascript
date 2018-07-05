// Lecture: Classes

/**
 * There are some problems with function constructors 
 * and they are too complex.
 * In ES6, this is simplified using classes.
 */


// ES5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John Smith', 1990, 'Programmer');


// ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    static greeting() {
        console.log('Hello guys!');
    }
}

const john6 = new Person6('John Smith', 1990, 'Programmer');




