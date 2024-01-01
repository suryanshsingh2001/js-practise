
// //let and const are hoisted but not initialised with undefined they are in temporal dead zone

// console.log(a, b)
// var a = 10
// var b = 20


data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Polyfill for .map
Array.prototype.myMap = function (cb) {
    let res = []
    for(let i = 0; i < this.length; i++) {
       res.push(cb(this[i], i, this));
    }
    return res;
}

const mapLog = data.myMap((item) => item * 2);
console.log(mapLog);

//Polyfill for .filter
Array.prototype.myFilter = function (cb) {
    let res = [];
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            res.push(this[i]);
        }
    }
    return res;
}

const filterLog = data.myFilter((item, index) => index % 2 === 0);
console.log(filterLog);


//Polyfill for .reduce

Array.prototype.myReduce = function(cb, acc) {
    let accumulator = acc || 0;
    for(let i = 0; i < this.length; i++) {
        accumulator = cb(accumulator, this[i], i, this);
    }
    return accumulator;
}

const reduceLog = data.myReduce((acc, item) => acc + item, 0);
console.log(reduceLog);

//Polyfill for .forEach

Array.prototype.myForEach = function(cb) {
    for(let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
}

data.myForEach((item) => item * 2);
// console.log(data);




Array.prototype.mySome = function(cb) {
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            return true;
        }
    }
    return false;
}
