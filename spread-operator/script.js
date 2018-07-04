// Lecture: spread operator

/**
 * The spread operator is used to spread the elements of an array 
 * to form multiple parameters
 * It is very useful to concatenate two arrays.
 * it also works on NodeList objects.
 */

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(15,28, 34, 71);
console.log(sum1);

let ages = [15, 28, 34, 71];

// ES5
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);



const familySmith = ['John', 'Bob', 'Jane'];
const familyMiller = ['Mary', 'Mark'];

const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);



const h = document.querySelector('h1');
const  boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(curr => curr.style.color = 'indigo');


