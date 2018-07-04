// Lecture: Aroow Function 2

/**
 * In ES5, each function has its own 'this' keyword.
 * So, in order to access the 'this' keyword of outer part, bind() method is used.
 * In ES6, the arrow functions do not have a 'this' keyword.
 * They use the this keyword of outer scope.
 */


// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', function () {
            var str = 'This is box ' + this.position + ' with color ' + this.color;
            alert(str);
        }.bind(this));
    }
};
// box5.clickMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            const str = `This is box ${this.position} with color ${this.color}`;
            alert(str);
        });
    }
};
box6.clickMe();

const mybox6 = {
    color: 'green',
    position: 1,
    clickMe: () => {    // This is invalid as it takes 'this' from global scope.
        document.querySelector('.green').addEventListener('click', () => {
            const str = `This is box ${this.position} with color ${this.color}`;
            alert(str);
        });
    }
};
// mybox6.clickMe();

