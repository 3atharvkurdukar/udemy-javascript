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

