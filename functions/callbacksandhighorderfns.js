// What are callback functions?
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.







// function x(y) {
//     console.log('x called')
//     y();
// }

// x(function y() {
//     console.log('y called')
// }
// )

//For example in setTimeout function, we pass a callback function as an argument to setTimeout function and setTimeout function invokes the callback function after the given time.

// setTimeout(function () {
//     console.log('timer')
// }, 5000);

//Note js wont wait for setTimeout to finish and it will continue executing the next line of code as setTimeout is an asynchronous function - blocking the main thread

// main thread is our call stack only

// Event Listerner is also an example of callback function

// document.getElementById('btn').addEventListener('click', function () {
//     console.log('btn clicked')
// })

//What if I want to count the number of times the button is clicked?

//first way - global variable

// let count = 0;

// document.getElementById('btn').addEventListener('click', function () {
//     count++;
//     console.log('btn clicked', count)
// })

//but this is not a good way as we are polluting the global namespace

//second way - closure


function attachEventListerner() {
    let count = 0;

    document.getElementById('btn').addEventListener('click', function () {
        count++;
        console.log('btn clicked', count)
    })
}

attachEventListerner();

//third way - IIFE - Immediately Invoked Function Expression see this later in this file

