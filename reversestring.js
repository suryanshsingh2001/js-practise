str = 'cat'
console.log(reverseString(str));
function reverseString(str) {
   
    //two pointer approach where we swap the first and last elements
    //then move the pointers towards the middle

    //convert string to array

    let arr = str.split('');
    let left = 0;
    let right = arr.length - 1;

    //while left is less than right
    while(left < right) {
        //swap the elements
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp; 
        //swap function in ES6
        // [arr[left], arr[right]] = [arr[right], arr[left]];

        //move the pointers
        left++;
        right--;
    }
    //convert array to string
    return arr.join('');


}