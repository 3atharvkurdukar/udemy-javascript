// Lecture: Blocks & IIFE

/**
 * In ES6, the variables are block-oriented. So, creating a block will make them private.
 * In ES5, this is not the case.
 * In ES5, we have to use IIFEs (Immmediately Invoked Function Expressions) to keep the elements private.
 * Thus, it should be noted not to use 'var' while using blocks.
 */

// ES5
(function () {
    var c  = 3;
})();
console.log(c);       // Undefined


//ES6

{
    const a = 1;
    let b = 2;
    var c = 3;
}
//console.log(a + b);   // Generates Error
console.log(c);