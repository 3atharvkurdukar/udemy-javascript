// Lecture: Inheritance

/**
 * ES6 provides a much simpler way of inheriting the classes than ES5.
 * It uses 'extends' and 'super' keyword for it.
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

var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}
Athlete5.prototype = Object.create(Person5.prototype);
Athlete5.prototype.wonMedal = function () {
    this.medals++;
    console.log(this.medals);
}
var john5 = new Athlete5('John', 1990, 'Swimmer', 5, 8);
john5.calculateAge();
john5.wonMedal();

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
}
class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const john6 = new Athlete6('John', 1990, 'Swimmer', 5, 8);
john6.calculateAge();
john6.wonMedal();


