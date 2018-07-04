// Lecture: rest Parameters

/**
 * Rest  parameters work in the opposite manner than spread operator.
 * It takes no of arguments and converts them into a string.
 * They are used to provide variable-length arguments to a function.
 */


/*************************PART 1*************************/
/*
// ES5
function isFullAge5() {
    console.log(arguments);     // contains the arguments passed.
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function (curr) {
        console.log((2018 - curr) >= 18);
    });
}
isFullAge5(1990, 1999, 2002, 1987);

// ES6
function isFullAge6(...years) {
    years.forEach(curr => console.log((2018 - curr) >= 18));
}
isFullAge6(1990, 1999, 2002, 1987);
*/


/*************************PART 2*************************/
// ES5
function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1); // tocut the first argument
    argsArr.forEach(function (curr) {
        console.log((2018 - curr) >= limit);
    });
}
isFullAge5(21, 1990, 1999, 2002, 1987);

// ES6
function isFullAge6(limit, ...years) {
    years.forEach(curr => console.log((2018 - curr) >= limit));
}
isFullAge6(18, 1990, 1999, 2002, 1987);




