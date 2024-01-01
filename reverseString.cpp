#include<bits/stdc++.h>

using namespace std;

int main() {
    string text = "Hello World";

    reverseString(text);
}

void reverseString(string text) {
   int left = 0;
   int right = text.length() - 1;

   while(left <= right) {
    swap(text[left], text[right]);
    left++;
    right--;
   }
}