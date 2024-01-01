const api = 'https://randomuser.me/api/'

//problems with callbacks

//callback hell- when we have to do multiple things one after the other 
// we have to nest the callbacks inside each other

// invertion of control- we are not in control of the code anymore 
// the control is inverted to the callback function

//fetch api is a promise based api

// fetch(api).then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data)
// }
// ).catch((error) => {
//     console.log(error)
// })


const person = fetch(api);

console.log(person)


//What is a promise?
//A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.




const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved')
    }, 2000)

    setTimeout(() => {
        reject('Promise rejected')
    }, 3000)
}
)

pr.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
}
)


//Promise chainging - when we return a promise from a then block we can chain another then block to it and so on

//example of promise chaining

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved')
    }, 2000)

    setTimeout(() => {
        reject('Promise rejected')
    }, 3000)
})


promise.then((data) => {
    console.log(data)
    return 'foo'
}).then((data) => {
    console.log(data)
    return 'bar'
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
}
)