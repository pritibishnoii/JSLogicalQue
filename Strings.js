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


function uncamelize(str,seprator=' '){

        // if(str)return str
        return str.split(/(?=[A-Z])/).join(seprator).toLowerCase()
  

}
console.log(uncamelize('helloWorld'))
console.log(uncamelize('helloWorld','-'))




// todo 13. Write a JavaScript function to concatenate a given string n times (default is 1).
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"


function repeat(str,count){
        if(count==undefined) return str;

        return str.repeat(count)

}
console.log(repeat("Ha!"))
console.log(repeat("Ha!",2))
console.log(repeat("Ha!",3))
console.log(repeat("Ha!",4))
console.log(repeat("Ha!",7))



// todo 14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).
// Test Data :
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."


function insert(str,addstr,pos){
    if (pos === undefined) {
        pos = 0; // If pos is undefined, default to the beginning of the string
    }
    if(addstr==undefined){
        addstr =''
    }
    // Insert `addstr` into `str` at the given `pos`
    return str.slice(0, pos) + addstr +" " + str.slice(pos); 

}
console.log(insert('We are doing some exercises.'))
console.log(insert('We are doing some exercises.','javascript'))
console.log(insert('We are doing some exercises.','javascript',18))