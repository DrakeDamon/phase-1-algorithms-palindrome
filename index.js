function isPalindrome(word) {
  let start = 0;
  let end = word.length - 1;

  while (start < end) {
      if (word[start] !== word[end]) {
          return false;
      }
      start++;
      end--;
  }
  return true;

  console.log(isPalindrome(racecare));
  console.log(isPalindrome(bear));
  console.log(isPalindrome(hello));
  console.log(isPalindrome(madam));

}


/*
PSEUDO CODE
FUNCTION isPalindrome(string)
Initialize the start and end of the string 
SET start to 0
SET end to length of string -1

Loop through the string while the start pointer is less than the end pointer WHILE start < end
Check if the characters at the start and end are different 
IF character at start does NOT equal character at end
IF they are different, the string is not a palindrome 
RETURN false
Move the start pointer forward and the end pointer backward

IF the loop completes without finding any differences, the string is a palindrome
RETURN true
END FUNCTION
*/


/* Test Code
POSITIVE TEST
Input: "racecar"
Expected Output: 'true'

NEGATIVE TEST
Input: "Bear"
Expected Output: 'false'

SINGLE CHARACTER
Input: "a"
Expect Output: 'true' (reads forward and backwards)

EMPTY STRING
Input: ""
Expected Output: 'true' (can be considered palindromic)


*/


/*
  Add written explanation of your solution here
We need to develop a function that checks if a given string is a palindrome. A palindrome is a word or phrase that reads the same backward as forward. The function should return 'true' if the string is a palindrome and 'false; if it isnt. For simplicity, the function will only deal with lowercase strings without spaces or special characters. 
*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
