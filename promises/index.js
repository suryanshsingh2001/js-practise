//Promises API code example



const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved')
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved')
    }, 3000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolved')
    }, 4000)
})




// Promise.all([p1, p2, p3]).then((res) => {
//     console.log(res)
// }).catch((error) => {
//     console.error(error)
// })

// Promise.allSettled([p1, p2, p3]).then((res) => {
//     console.log(res)
// }).catch((error) => {
//     console.error(error)
// })

// Promise.race([p1, p2, p3]).then((res) => {
//     console.log(res)
// }).catch((error) => {
//     console.error(error)
// })

Promise.any([p1, p2, p3]).then((res) => {
    console.log(res)

}).catch((error) => {
    console.error(error)
})