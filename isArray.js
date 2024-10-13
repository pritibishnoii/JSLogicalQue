// todo 1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true



function is_array(input) {
    // return Array.isArray(input);
    // return Object.prototype.toString.call(input) === '[object Array]';
    // return input.constructor === Array;
    return typeof input === 'object'

}


console.log(typeof [1, 2, 4, 0])
console.log(is_array('w3resource'))
console.log(is_array([1, 2, 4, 0]));




//todo 2  Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]


function array_clone(input) {

    // return [...input];
    // return Object.assign(input);
    return input.map(item => item)

}
console.log(array_clone([1, 2, [4, 0]]));
console.log(array_clone([1, 2, 4, 0]));


const arr = [1, 2, 3, 4, 5];

let c = [].concat(arr)
console.log(c)
const newAr = arr.slice()
console.log(newAr)
console.log(arr == newAr)
const arrrrr = Array.from(arr)
console.log(arrrrr)
let cloneArr = [...arr, 6, 7]
console.log(cloneArr)
console.log(arr)
let cla = Object.assign([], arr)
console.log(cla)





//todo 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []


function first(arr, n) {
    if (n <= 0) return [];
    if (n == null) return arr[0]
    if (arr.length < n) return arr;
    return arr.slice(0, n)
}
console.log(first([7, 9, 0, -2]))
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));















// todo4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]
function last(arr, n) {
    if (n <= 0) return [];
    if (n == null) return arr[arr.length - 1];
    if (arr.length < n) return arr;
    return arr.slice(-n);
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));
console.log(last([1, 2], 3))



//todo 5. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"


function joinArr(arr) {
    // return arr.join(",")
    return arr.toString()
}

const myColor = ["Red", "Green", "White", "Black"]
console.log(joinArr(myColor))



//todo 6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.   (num %2==0  ? num + '-' : num)

function insertDashes(num) {
 
    return  num.toString().split('').map(n => n % 2 == 0?"-"+n:n).join("");

  

}

console.log(insertDashes(925468)) // Expected Output : 9-254-6-8




//todo 7. Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8   

function sortArr(arr){
    // return arr.sort()
    // return arr.sort((a,b)=>a-b)
    
   for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
        let temp= arr[i];
        arr[i]= arr[i+1];
        arr[i+1]=temp;
    }
   }
    return arr;
}
// var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
var arr1 =  [-4,-3,1,2,3,5,6,7,8] ;

console.log(sortArr(arr1))