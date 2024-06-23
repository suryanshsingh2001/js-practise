let name1 = {
    firstName: "Sachin",
    lastName: "Tendulkar",
   
}

let printFullName = function(hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + "," + state);
};


let name2 = {
    firstName : "Virat",
    lastName : "Kohli"
}

//we can use call method to borrow the method from another object

printFullName.call(name2, 'Delhi', 'Delhi');

//Only difference between call and apply is that apply takes the arguments in the form of array
printFullName.apply(name2, ['Delhi', 'Delhi']);

//bind method returns the copy of the function otheriwse it is same as call method
//Always returns the function with the context which we can be invoked later
let printMyName = printFullName.bind(name2, 'Delhi', 'Delhi');
console.log(printMyName);
printMyName();