function countChar(str, char) {
  str = str.toLowerCase();
  char = char.toLowerCase();
  totalCount = str.split("").reduce((accum, currChar) => {
    if (currChar === char) {
      accum++;
    }
    return accum;
  }, 0);
  return totalCount;
}

console.log(countChar("MissIsiipi", "I"));

// function countCharr(str, char) {
//   str = str.toLowerCase();

//   char = char.toLowerCase();
//   str = str.split("");
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     // console.log(str[i]);
//     if (str[i] === char) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countCharr("MissIsiipi", "I"));

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longest = words[0];
  console.log(longest);
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"




