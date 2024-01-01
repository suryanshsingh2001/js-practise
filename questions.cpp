//Questions asked by Iksha Labs Gurugram

#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#include <unordered_map>
#include <unordered_set>
#include <queue>


using namespace std;

void reverseString(string text) {
    int left = 0;
    int right = text.length() - 1;

    while(left <= right) {
        swap(text[left], text[right]);
        left++;
        right--;
    }
    cout << text << endl;
}

int main() {
    string text = "Hello World";

    reverseString(text);
}

// Output: dlroW olleH

// Time Complexity: O(n)

// Space Complexity: O(1)

// Follow up questions:
// 1. What if the string is a sentence?
// 2. What if the string is a sentence and we want to reverse the words in the sentence?
// 3. What if the string is a sentence and we want to reverse the words in the sentence and also reverse the string?
// 4. What if the string is a sentence and we want to reverse the words in the sentence and also reverse the string and also reverse the words in the sentence?
// 5. What if the string is a sentence and we want to reverse the words in the sentence and also reverse the string and also reverse the words in the sentence and also reverse the string?
 


// 1. What if the string is a sentence? 
// Ans: We can use the same function to reverse the string.
