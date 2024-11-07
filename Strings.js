//todo  1. Write a JavaScript function to check whether an 'input' is a string or not.
// Test Data :
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false



function is_string(val) {
    return typeof val == "string"
}
console.log(is_string('w3resource'))
console.log(is_string([1, 2, 4, 0]))
console.log(is_string([]))
console.log(is_string(''))
console.log(is_string(12))



// todo 2. Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false

const is_Blank = (str) => {
    return str == ''
    return str.length == 0
}

console.log(is_Blank(''))
console.log(is_Blank('abc'))



// todo 3. Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]

const string_to_array = (str) => {
    return str.trim().split(" ")
}
console.log(string_to_array("kabir singh"))
console.log(string_to_array("   kabir singh   "))



// todo 4. Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

function truncate_string(str, n) {
    // return str.slice(0,n)
    return str.substring(0, n);
    let newStr = ''
    for (let i = 0; i < n; i++) {
        newStr += str[i]
    }
    return newStr
}
console.log(truncate_string("Robin Singh", 4))
console.log(truncate_string("kabir Singh", 4))



// todo 5. Write a JavaScript function to convert a string into abbreviated form.
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."
// Click me to see the solution.

function abbrev_name(str) {
    // const firstName = str[0]; // Get the first name
    // const lastNameInitial = str[1] ? str[1][0] + '.' : '';
    let splitStr = str.trim().split(" ")  // ["Robin","singh"]
    return `${splitStr[0]}  ${splitStr[1].charAt(0)}.`

}
console.log(abbrev_name("Robin Singh"))



// todo 7. Write a JavaScript function to parameterize a string.
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"


function string_parameterize(str) {
    // return str.trim().toLowerCase().replace("","-")
    return str
        .toLowerCase()              // Convert the string to lowercase
        .replace(/[^\w\s]/g, '')    // Remove punctuation and special characters
        .trim()                     // Remove leading and trailing whitespaces
        .replace(/\s+/g, '-');      // Replace spaces with hyphens
}
console.log(string_parameterize("Robin Singh from USA."));



//todo  8. Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"


function capitalize(str) {

    // return str.toUpperCase()[0] + "" +str.slice(1)
    return str.charAt(0).toUpperCase() + str.slice(1);

}
console.log(capitalize('js string exercises'))



//todo  9. Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"



function capitalizeEachLetter(str) {

    return str.split(" ").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ")

}
console.log(capitalizeEachLetter('js string exercises'))




// todo 10. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
// Test Data :
// *console.log(swapcase('AaBbc'));
// *"aAbBC"

function swapcase(str) {
    return str.split('').map(s => {
        if (s == s.toLowerCase()) {
            return s.toUpperCase()
        }
        if (s == s.toUpperCase()) {
            return s.toLowerCase()
        }
    }).join("")
}
console.log(swapcase('AaBbc'))




// todo 11. Write a JavaScript function to convert a string into camel case.
// Test Data :
// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));
// "JavaScriptExercises"
// "JavaScriptExercises"
// "JavaScriptExercises"


function camelize(str) {

    return str.split(' ').map((s, index) => index == 0 ? s.charAt(0).toLowerCase() + s.slice(1) : s.charAt(0).toUpperCase() + s.slice(1)).join("")

}
console.log(camelize("JavaScript exercises"))




// todo 12. Write a JavaScript function to uncommelize a string.
// Test Data :
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));
// "hello world"
// "hello-world"
// "hello_world"


function uncamelize(str, seprator = ' ') {

    // if(str)return str
    return str.split(/(?=[A-Z])/).join(seprator).toLowerCase()


}
console.log(uncamelize('helloWorld'))
console.log(uncamelize('helloWorld', '-'))




// todo 13. Write a JavaScript function to concatenate a given string n times (default is 1).
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"


function repeat(str, count) {
    if (count == undefined) return str;

    return str.repeat(count)

}
console.log(repeat("Ha!"))
console.log(repeat("Ha!", 2))
console.log(repeat("Ha!", 3))
console.log(repeat("Ha!", 4))
console.log(repeat("Ha!", 7))



// todo 14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).
// Test Data :
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."


function insert(str, addstr, pos) {
    if (pos === undefined) {
        pos = 0; // If pos is undefined, default to the beginning of the string
    }
    if (addstr == undefined) {
        addstr = ''
    }
    // Insert `addstr` into `str` at the given `pos`
    return str.slice(0, pos) + addstr + " " + str.slice(pos);

}
console.log(insert('We are doing some exercises.'))
console.log(insert('We are doing some exercises.', 'javascript'))
console.log(insert('We are doing some exercises.', 'javascript', 18))




//todo  15. Write a JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc.
// Test Data :
// console.log(humanize_format());
// console.log(humanize_format(1));
// console.log(humanize_format(8));
// console.log(humanize_format(301));
// console.log(humanize_format(402));
// "1st"
// "8th"
// "301st"
// "402nd"





function humanize_format(num) {
    if (typeof (num) == 'undefined') return;

    if (num % 10 >= 11 && num % 100 <= 13) return num + 'th'
    switch (num % 10) {
        case 1: return num + 'st'
        case 2: return num + 'nd'
        case 3: return num + 'rd'
    }
    return num + 'th'

}
console.log(humanize_format(1))
console.log(humanize_format(8))
console.log(humanize_format(301))  // 301 %10 1 st   301%100  3011%100 - 11th
console.log(humanize_format(402))      //402%10 2nd 
console.log(humanize_format())








// todo 16. Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("...") (by default) or specified characters.
// Test Data :
// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.',19))
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
// "We are doing JS string exercises."
// "We are doing JS ..."
// "We are doing !!"


function text_truncate(str, pos, char) {
    if (pos == null) pos = 100
    if (char == null) char = "..."
    // return str.slice(0,pos-char.length)+  char;
    return str.substring(0, pos - char.length) + char


}
console.log(text_truncate("We are doing JS string exercises."))
console.log(text_truncate("We are doing JS string exercises.", 19))
console.log(text_truncate("We are doing JS string exercises.", 15, '!!'))





// todo 17. Write a JavaScript function to chop a string into chunks of a given length.
// Test Data :
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]


function string_chop(str, chunkSize) {
    if (chunkSize === undefined) {
        return [str]; // Return the whole string as an array if no chunk size is provided
    }
    let result = [];
    for (let i = 0; i < str.length; i += chunkSize) {
        result.push(str.slice(i,i+chunkSize))     //    
    }
    return result
}
console.log(string_chop('w3resource'))
console.log(string_chop('w3resource', 2))
console.log(string_chop('w3resource', 3))


//todo  18. Write a JavaScript function to count substrings in a string.
// Test Data :
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output :
// 1









// Return the index of sentences that contain maximum number of alphabet 'a' in single sentence    input sentence=["ananya loves sharpener","apple is a very healthy fruit","this is great thanks very much " ] output is count 4 .   Explanation ananya loves sharperner -a count -4 . apple is very healthy fruit -a count --3. this is great thanks very much     a count--2  maximum is 4 for the string having index 0  



const sentences = [
    "ananya loves sharpener",
    "apple is a very healthy fruit",
    "this is great thanks very much"
  ];
  
  function countStringMax(sentences) {
    let maxCount = 0;
    let maxIndex = -1;
  
    // Loop through each sentence
    sentences.forEach((sentence, index) => {
      let count = 0;
  
      // Count the occurrences of 'a' in the current sentence
      sentence.split("").forEach(char => {
        if (char.toLowerCase() === 'a') {
          count++;
        }
      });
  
      // Check if this count is greater than the current maxCount
      if (count > maxCount) {
        maxCount = count;
        maxIndex = index;
      }
    });
 
    return { maxIndex, maxCount };
  }
  
console.log(countStringMax(sentences))
//   console.log(`Maximum 'a' count is ${result.maxCount} at index ${result.maxIndex}`);
  