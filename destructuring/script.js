// Lecture: Destructuring

/**
 * Destructuring is the method of placing the elements in an array or object
 * to separate variables.
 * Instead of manually assigning each of the element, ES6 allows us to use 
 * some shortcut for it.
 * It can also be used to return more than one values from a function. 
 */

// ES5
var john = ['John', 26];
var name5 = john[0];
var age5 = john[1];

// ES6
const [name6, age6] = ['John', 26];
console.log(`${name6} ${age6}`);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};
const {firstName, lastName} = obj;
console.log(`${firstName} ${lastName}`);

const {
    firstName: a,
    lastName: b
} = obj;
console.log(`${a} ${b}`);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 58 - age];
}
const [myAge, myRetirement] = calcAgeRetirement(1999);
console.log(myAge);
console.log(myRetirement);

