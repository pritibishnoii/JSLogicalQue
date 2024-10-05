// todo 1 . Check if a String is a Palindrome
// Determine if a string reads the same backward as forward (ignoring cases and non-alphanumeric characters).

const isPalindrome = (str) => str === str.split("").reverse().join("");

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("radar"));
console.log(isPalindrome("refer"));
console.log(isPalindrome("level"));

// function isPalindrome(str) {
//   const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   return cleanedStr === cleanedStr.split("").reverse().join("");
// }
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true

// function isPalindrome(str) {
//   const len = str.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPalindrome("level"));

// ********************** (2) ******************************//
// todo 2  Count the Occurrence of Each Character in a String
// Write a function that takes a string and returns an object showing how many times each character appears in it.

function findCharOccurenc(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanedStr.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}

console.log(findCharOccurenc("hello"));

function countCharacters(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = charCount[char] + 1 || 1;
  }
  return charCount;
}
console.log(countCharacters("hello"));
// Output: { h: 1, e: 1, l: 2, o: 1 }

// ********************* (3) *******************************

// todo 3 Check if Two Strings are Anagrams
// Write a function to determine if two strings are anagrams of each other.

function isAnagram(str1, str2) {
  return (
    str1.toLowerCase().split("").sort().join("") ===
    str2.toLowerCase().split("").sort().join("")
  );
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("listen", "Silent"));
// Output: true

// ********************* (4) *******************************

// todo 4 Find the Longest Word in a String
// Write a function to find the longest word in a sentence.

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longest = words[0];
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));
