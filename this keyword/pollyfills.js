let name = {
    firstName: "Sachin",
    lastName: "Tendulkar",
}

let printName = function() {
    console.log(this.firstName + " " + this.lastName);
}

let printMyName = printName.bind(name);
printMyName();


// Polyfill for bind method

Function.prototype.myBind = function(...args) {
    let obj = this;
    let params = args.slice(1);
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}

let printMyName2 = printName.myBind(name);
printMyName2();


