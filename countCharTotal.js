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
