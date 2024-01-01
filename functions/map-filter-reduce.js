// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const double = arr.map((item) => {
//     return item * 2;
// })

// console.log(double);

// const toBinary = arr.map((item) => {
//     return item.toString(2);
// })

// console.log(toBinary);

// //filter odd numbers

// const odd = arr.filter((item) => {
//     return item % 2 !== 0;
// })

// //greater than 5

// const greaterThanFive = arr.filter((item) => {
//     return item > 5;
// }
// )

// //find sum or max or min
// const sum = arr.reduce((acc, item) => {
//     return acc + item;
// }, 0)

// console.log(sum)

// const max = arr.reduce((acc, item) => {
//     if(item > acc) {
//         acc = item;
//     }
//     return acc;
    
// }, 0)
// console.log(max)


// Exercise time :

const users = [
    {firstName: 'Akash', lastName: 'Srivastava', age: 24},
    {firstName: 'Rahul', lastName: 'Srivastava', age: 22},
    {firstName: 'Aman', lastName: 'Srivastava', age: 20},
    {firstName: 'Rohit', lastName: 'Srivastava', age: 18},
    {firstName: 'Akash', lastName: 'Srivastava', age: 24},

];

// 1. create a list of full names of all users

const fullNames = users.map((user) => {
    return `${user.firstName} ${user.lastName}`;

})
console.log(fullNames);

// 2. List of people with same age

const sameAge = users.filter((user) => {
    return user.age === 24;
})
console.log(sameAge);


// 3. Suppose i want this {24: 2, 22: 1, 20: 1, 18: 1}

const count = users.reduce((acc, user) => {
    if(acc[user.age]) {
        acc[user.age]++;
    } else {
        acc[user.age] = 1;
    }
    return acc;
}, {})

// console.log(count);

// 4. First name of all the users less than 20 - chai

const firstNameLessThan20 = users.filter((user) => {
    return user.age < 20;
}).map((x) => x.firstName);

console.log(firstNameLessThan20);

//Note: we used filter and map together to get the desired result, but we can use reduce alone to get the same result

const firstNameLessThan20Reduce = users.reduce((acc, user) => {
    if(user.age < 20) {
        acc.push(user.firstName);
    }
    return acc;
}, [])

console.log(firstNameLessThan20Reduce);
        