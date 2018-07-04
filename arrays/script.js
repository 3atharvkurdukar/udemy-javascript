// Lecture: Arrays

const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);  // Confusing 🤯
boxesArr5.forEach(function (curr) {
    curr.style.backgroundColor = 'dodgerblue';
});

// ES6
const boxesArr6 = Array.from(boxes);    // Simple 😎
boxesArr6.forEach(curr => curr.style.backgroundColor = 'dodgerblue');

// ES5
for (let i = 0; i < boxesArr5.length; i++) {        // Too long 😴
    if (boxesArr5[i].className === 'box blue') {
        continue;
    }
    boxesArr5[i].textContent = 'I changed to blue!';
}

// ES6
for (const curr of boxesArr6) {     // Super short 😉
    if (curr.className.includes('blue')) {
        continue;
    }
    curr.textContent = 'I changed to blue!';
}

let ages = [15, 17, 4, 21, 14, 8];
// ES5
var full = ages.map(function (curr) {
    return curr >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(curr => curr >= 18));    // New ✨
console.log(ages.find(curr => curr >= 18));         // New ✨
