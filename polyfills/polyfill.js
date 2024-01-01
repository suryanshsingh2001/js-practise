let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Polyfill for .map
Array.prototype.myMap = function (callback)  {
    let result = [];
    for(let i = 0; i < this.length; i++) {
       result.push(callback(this[i], i, this));
    }
    return result;
}



const mapLog = data.myMap((item) => item * 2);
// console.log(mapLog);

// Polyfill for .forEach
Array.prototype.myForEach = function (callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

data.myForEach((item) => item * 2);
// console.log(data);

// Polyfill for .filter
Array.prototype.myFilter = function(callback) {
    let result = [];
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

const filterdData = data.myFilter((item, index) => index % 2 === 0);
console.log(filterdData);

// Polyfill for .reduce
Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue || 0;
    for(let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}

const reducedData = data.myReduce((acc, item) => acc + item, 0);
console.log(reducedData);

// Polyfull for Promise.all
// What does promise.all do?
// Promise.all takes an array of promises and returns a promise that waits for all of them to finish.
Promise.myAll = function(promises) {
    return new Promise((resolve, reject) => {
        let result = [];
        promises.forEach((promise) => {
            promise.then((data) => {
                result.push(data);
                if(result.length === promises.length) {
                    resolve(result);
                }
            }).catch((err) => {
                reject(err);
            })
        })
    })
}

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2');
    }, 2000);
}   );

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3');
    }, 3000);
});

Promise.myAll([promise1, promise2, promise3]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})

