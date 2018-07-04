// Lecture : Strings

/**
 * ES6 allows the use of string literals enclosed in `` when we want to 
 * put variables and expressions in a string.
 */

let firstName = 'John';
let lastName = 'Smaith';

const yearOfBirth = 1990;

function calcAge(year) {
    return 2018 - year;
}

//ES5
console.log('I am ' + firstName + ' ' + lastName + '. I am ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`I am ${firstName} ${lastName}. I am ${calcAge(yearOfBirth)} years old.`);

