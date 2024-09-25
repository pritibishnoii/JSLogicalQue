// find the longest word in a string

let string = "javascripts is the most popular programing language  ";

function findLongestWord(str) {
  if (str.trim() == 0) return false;
  // first  we need to compair the each word  , for comparing split the word ;
  let words = str.split(" ");
  //   words = words.sort((a, b) => b.length - a.length);
  //   return words[0];
  //   words = words.sort((a, b) => a.length - b.length);
  //   return words.at(-1);

  return words.reduce((accum, curr) =>
    curr.length > accum.length ? curr : accum
  );
}

console.log(findLongestWord(string));
