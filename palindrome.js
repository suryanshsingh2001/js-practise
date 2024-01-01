text = 'racecar';
// text = 'racecars';
console.log(isPalindrome(text) ? 'Palindrome' : 'Not Palindrome');


// Solution 1
function isPalindrome(text) {
    let reversedText = text.split('').reverse().join('');
    return text === reversedText;
}