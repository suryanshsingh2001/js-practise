// function x() {
//     for(let i = 1; i <= 5; i++) {
//         setTimeout(() => console.log(i), i * 1000);
//     }
//     console.log('Hello');
// }
// x();


// ------------------------------

//if use var instead of let then it will print 6 five times

//if you want to use var then use closure

function x() {
    for(var i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(() => console.log(i), i * 1000);
        }
        close(i);
    }
    console.log('Hello');
}

x();

