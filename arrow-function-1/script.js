// Lecture: Arrow Functions

const years = [1990, 1999, 1983, 2004, 1974];

// ES5
var ages5 = years.map(function (el) {
    return 2018 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2018 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Element ${index}: ${2018 - el}`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Element ${index}: ${age}`;
});
console.log(ages6);


