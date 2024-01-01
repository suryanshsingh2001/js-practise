// async function always returns a promise --very important

// async function getData() {
//     return "Data";  //non promise value
// }
//it will take the value and wrap it in a promise

// const data = getData();


// data.then((res) => {
//     console.log(res)
// })

const p = new Promise((resolve, reject) => {
    resolve('promise resolved');
})


// await can only be used inside an async function -- very important
async function getData() {
    const data = await p;
    console.log(data)
}


getData();
