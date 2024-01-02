// async function always returns a promise --very important

// async function getData() {
//     return "Data";  //non promise value
// }
//it will take the value and wrap it in a promise

// const data = getData();


// data.then((res) => {
//     console.log(res)
// })

// const p = new Promise((resolve, reject) => {
//     resolve('promise resolved');
// })


// // await can only be used inside an async function -- very important
// async function getData() {
//     const data = await p;
//     console.log(data)
// }

// getData();


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise resolved');
    }, 5000)

})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise resolved');
    }, 10000)

})

// -----Diffference between async await and promise

//Here both hello friend and promise resolved will be printed after 10 seconds as anything after await will be executed after the promise is resolved

// async function getData() {

//     //this will not wait for the promise to resolve and print before first
//     console.log('before')

//     const data = await p;
//     console.log("Hello firned")
//     console.log(data)
// }


//If we used normal function then it will not wait for the promise to resolve and print hello world first

// function getData() {
//     p.then((res) => {
//         console.log(res)
//     })

//     console.log('hello world')
// }




// now what if we have two promises and we want to execute them in parallel
// Note: the promises will be executed in parallel and the time taken will be the maximum of the two promises

// async function getData() {
//     console.log("hello world")
//    const val1 = await p1;
//    console.log("p1")
//     console.log(val1)

//     const val2 = await p2;
//     console.log("p2")
//     console.log(val2)
// }

// getData();

// Note: if we want the promise to be resolved as soon their time is up then we can do this instead

// async function getData() {
//     const val1 = await p1;
//     console.log("val1")
//     console.log(val1)

//     const val2 = await p1;
//     console.log("val2")
//     console.log(val2)
// }



//Lets take an example of fetching data from an api

const url = "https://jsonplaceholder.typicode.com/posts";

async function handlePromise() {

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }
}


handlePromise();

//Note you can also use .then and .catch with async await

// async function handlePromise() {
//     fetch(url).then((response) => {
//         return response.json()
//     }).then((data) => {
//         console.log(data)
//     }).catch((error) => {
//         console.log(error)
//     })


//Async await makes the code readable and easy to understand, also you dont need to use .then and .catch callbacks, the code is excuted in a synchronous manner