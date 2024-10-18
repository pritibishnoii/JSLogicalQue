//todo  1. Write a JavaScript function to check whether an 'input' is a string or not.
// Test Data :
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false



function is_string(val){
    return typeof val =="string"
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

const is_Blank=(str)=>{
 return str==''
return str.length==0
}

console.log(is_Blank(''))
console.log(is_Blank('abc'))



// todo 3. Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]

const string_to_array=(str)=>{
        return str.trim().split(" ")
}
console.log(string_to_array("kabir singh"))
console.log(string_to_array("   kabir singh   "))



// todo 4. Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

function truncate_string(str,n){
// return str.slice(0,n)
return str.substring(0, n); 
let newStr=''
for(let i=0;i<n;i++){
   newStr+= str[i]
}
return newStr
}
console.log(truncate_string("Robin Singh",4))
console.log(truncate_string("kabir Singh",4))



// todo 5. Write a JavaScript function to convert a string into abbreviated form.
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."
// Click me to see the solution.

function abbrev_name(str){
    // const firstName = str[0]; // Get the first name
    // const lastNameInitial = str[1] ? str[1][0] + '.' : '';
 let splitStr= str.trim().split(" ")  // ["Robin","singh"]
return `${splitStr[0]}  ${splitStr[1].charAt(0)}.`

}
console.log(abbrev_name("Robin Singh"))