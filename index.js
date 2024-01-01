let arr = [
    {name: 'John', age: 25},
    {name: 'Pete', age: 30},
    {name: 'Mary', age: 28}
];

// Map
// let names = arr.map((item) => item.name + ' ' + item.age);
// console.log(names); // John 25, Pete 30, Mary 28


// .for-each
arr.forEach((item) => item.age += 1);
console.log(arr);

// .filter
let tooYoung = arr.filter((item) => item.age <= 30);
console.log(tooYoung);

// .reduce
let totalAge = arr.reduce((acc, item) => acc + item.age, 0);
console.log(totalAge);