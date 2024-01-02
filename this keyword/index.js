
// "use strict" //use strict mode
//this in the global scope
//what ever is in the global scope is the global object
console.log(this) //here this is window object/global object , in browser it is window object, in node it is global object

//this inside a function
function a() {
    //The value depends on strict mode or not
    //if strict mode is used then this will be undefined inside a function
    console.log(this) //this is also window object/global object
}
a();



// Note: if we use strict mode then this will be undefined inside a function, but in browser it will be window object,  "use strict" to use strict mode
//Note: you can use window.a() to call a function in browser and it will work as it is in strict mode.


//this inside a object's method..differnce between method and object is that method is a function inside an object. 
const obj = {
    name: 'Rahul',
    x: function () {
        console.log(this) //this is the object itself
    }
}
//it depends on how the function is called

//if we call the function like this
obj.x() //this is the object itself



//diffrence between call apply bind (sharing methods between objects) - in call-apply-bind.js
//


//this inside an arrow function
//arrow function does not have its own this, it takes this from its parent(lexical context) enlosing lexical context
const obj2 = {
    name: 'Rahul',
    x: () => {
        console.log(this) //this is the window object/global object
    }
}

obj2.x() //this is the window object/global object

//this inside nested arrow function
const obj3 = {
    name: 'Rahul',
    x: function () {
        console.log(this) //this is the object itself

        const y = () => {
            console.log(this) //this is the object itself
        }
        y();
    }
}

obj3.x() //this is the object itself


//this keyword inside DOM
// look at index.html


//this inside a class, contructor, static method etc is left for later