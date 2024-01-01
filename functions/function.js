//function statement 
function a() {
    console.log('a called')
}
a();
//function expression
var b = function () {
    console.log('b called')
}
b();

//difference between function statement and function expression is [hoisting] - function statement is hoisted and function expression is not hoisted

//function statement is also called function declaration

// named function expression
var c = function xyz() {
    console.log('c called')
}
c();
// xyz(); //error


//Anonymous function - function without name

// function () {
//     console.log('Anonymous function')
// }
// //error

// can be passed as a parameter to another function


//first class function - function can be stored in a variable
// defintion - a programming language is said to have first class functions if it treats functions as first class citizens 
// first class citizens - a first class citizen (sometimes called first class objects) in a programming language is an entity which supports all the operations generally available to other entities. these operations typically include being passed as an argument, returned from a function, and assigned to a variable

// the ability to use functions as values, pass functions as arguments to other functions, and return functions as the values from other functions is known as first class functions

function x(param1) {
    console.log('x called')
}
var z = x(param1);
z(param1);