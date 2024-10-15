// todo 1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true





function is_array(input) {
    return Array.isArray(input);
    // return Object.prototype.toString.call(input) === '[object Array]';
    // return input.constructor === Array;
    // return typeof input === 'object'

}


console.log(typeof [1, 2, 4, 0])
console.log(is_array({}))//Object
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

// console.log(["b","a"],join(","))

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
    return num.toString().split('').map(n => n % 2 == 0 ? "-" + n : n).join("");



}

console.log(insertDashes(925468)) // Expected Output : 9-254-6-8




//todo 7. Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8   

function sortArr(arr) {
    // return arr.sort()
    // return arr.sort((a,b)=>a-b)

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// todo -3>8 - -3  [-3]        8>7 - [-3,7,8]   8>6  -  [-3,7,6,8]   8>5 - [-3,7,6,5,8]   8>>-4 [-3,7,6,5,-4]   8>3 - [-3,7,6,5,-4,3,8]    8>2 - [-3,7,6,5,-4,3,2]   8>1 - [-3,7,6,5,-4,3,2,1 ,8]     
// var arr1 =  [-4,-3,1,2,3,5,6,7,8] ;

console.log(sortArr(arr1))



// todo 8. Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

function frequentItem(arr) {
    const frequency = arr.reduce((accum, item) => {
        accum[item] = (accum[item] || 0) + 1
        return accum
    }, {})

    console.log(frequency)

    let mostFrequent = Object.keys(frequency).reduce((a, b) =>      // ['2','3','4','9','a']   a-2 b-3   a-3 b-4   a-4 b-9   a-9 b-a  
        frequency[a] > frequency[b] ? a : b                         // frequency[2]>frequency[4] ? 4
    );                                                              // frequency[4]>frequency[1]? 4
    // frequency[1]>frequency[1]? 1
    // frequency[1]>frequency[5]? 5
    console.log(mostFrequent)


    //     let res = mostFrequent.reduce((a, b) => frequency[a] > frequency[b] ? a : b)
    //     console.log(res)
    //    console.log( frequency[res])

    return `${mostFrequent} (${frequency[mostFrequent]} times)`;
}
// accum={}

// accum[3]= (accum[3] ||0)+1  --- (undefined||0)+1   = 1                                  
// accum[a]  =(accum[a] ||0)+1  --- (undefined||0)+1   = 1 
// accum[a]= (accum[a] ||0)+1  --- (1||0)+1   = 2
// accum[a]=(accum[a]|| )+1-->   (2||0)+1 =3
// accum[2]=(accum[2]||0)+1--> (undefined||0)+1 = 1
// accum[3]=(accum[3]||0)+1-> (1||0)+1 = 2
// accum[a]= (accum[a]||0)+1 -> (3||0)+1->4
// accum[3]=(accum[3]||0)+1-> (2||0)+1-> 3
// accum[a]=(accum[a]||0)+1-> (4||0)+1->5
// accum[2]=(accum[2]||0)+1-> (1||0)+1- 2
//accum[4]=(accum[4]||0)+1-> (undefined||0)+1->1
//accum[9]=(accum[9]||0)+1->(undefined||0)+1->1
//accum[3]=(accum[3]||0)+1=> (3||0)+1->4



//{3:1}
//{3:1,a:1}
//{3:1,a:2}
//{3:1,a:3}
//{3:1,a:3,2:1}
//{3:2,a:,2:1}
//{3:2,a:4,2:1}
//{3:3,a:4,2:1}
//{3:3,a:5,2:1}
//{3:3,a:5,2:2}
//{3:3,a:5,2:2,4:1}
//{3:3,a:5,2:2,4:1,9:1}
//{3:4,a:5,2:2,4:1,9:1}

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(frequentItem(arr1))




//todo 9. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function swapString(str) {
    return str.split(" ").map(s => s[0].toLowerCase() + s.slice(1).toUpperCase()).join(" ")
}

console.log(swapString("The Quick Brown Fox"))

// todo Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------

var aar = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];


for (let i = 0; i < aar.length; i++) {
    console.log(`row ${i}`)
    for (j = 0; j < aar[i].length; j++) {
        console.log(` ${aar[i][j]}`);
    }


}









//todo 11. Write a JavaScript program to find the sum of squares of a numerical vector.



function sumVector(arr) {
    return arr.reduce((sum, num) => sum + num ** 2, 0)
}

console.log(sumVector([1, 2, 3, 4, 5]))









//todo 13. Write a JavaScript program to add items to a blank array and display them.
// Sample Screen :
// add elements in an blank array
// Element 0=23
// Element 1=23
// Element 2=23




// todo 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
var arr2 = [1, 2, 4, 3, 3, 4, 5, 6, 7, 8]
let array = ["Apple", "Banana", "apple", "Orange", "banana", "ORANGE"];
array = array.map(elm => elm.toLowerCase())
// let newSet = new Set(arr2);
let newSet = new Set(array);
// let newArrr = Array.from(newSet);
let newArrr = [...newSet]
console.log(newAr)
console.log(newSet)


// todo 15. We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -
// Note : Use ordinal numbers to tell their position.

let o = ["th", "st", "nd", "rd"]
const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
function num(n) {
    if (n == 1) return o[1]
    if (n == 2) return o[2];
    if (n == 3) return o[3];
    return o[0];


}
color.forEach((clr, index) => {
    let position = index + 1;
    console.log(`${position}${num(position)} choice is ${clr}`)
})

// console.log(num(1))


// todo 17. Write a JavaScript program to shuffle an array.
// Click me to see the solution

let sArr = [1, 2, 4, 3, 13, 14, 5, 6, 7, 18]

function suffArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let random = Math.floor(Math.random() * i)
        let temp = arr[i]
        arr[i] = arr[random]
        arr[random] = temp
    }
    return arr
}
console.log(suffArray(sArr))




// todo 18. Write a JavaScript program to perform a binary search.
// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
// Sample array :
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// Expected Output :
// console.log(binary_Search(items, 1)); //0
// console.log(binary_Search(items, 5)); //4

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    // let mid= arr.length/2

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] == target) {
            return mid
        }
        else if (arr[mid] < target) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return -1

}
var items = [1, 2, 3, 4, 5, 7, 8, 9];
let result = binarySearch(items, 2);
console.log(result)



//todo  19. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];
let results = []

let maxLength = Math.max(array1.length, array2.length)
console.log(maxLength)
for (let i = 0; i < maxLength; i++) {
    let value = array1[i] || 0 + array2[i] || 0
    results.push(value)
}
console.log(results)






//todo  20. Write a JavaScript program to find duplicate values in a JavaScript array.\

function findDuplicates(arr) {
    let duplicates = [];
    let seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {                                  //false - seen{}.has(arr[1])  -false   seen{1}- seen.has(arr[2]) -false
            if (!duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        } else {
            seen.add(arr[i]);                         //see.add(arr[1])  seeen{1} -- seen.add(arr[2]) -seen{1,2}
        }
    }

    return duplicates;
}

// Example usage:
let a = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 1];
let duplicateValues = findDuplicates(a);
console.log("Duplicates:", duplicateValues);








// todo 21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]
let fArr = [1, [2], [3, [[4]]], [5, 6]];
let flat_arr = fArr.flat(3)
console.log(flat_arr);


function flatArr(arr) {
    let flated_Arr = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            flated_Arr = flated_Arr.concat(flatArr(element))
        }
        else {
            flated_Arr.push(element)
        }
    });
    return flated_Arr
}
console.log(flatArr(fArr))
console.log(flatArr([1, [2], [3, [[4]]], [5, 6]], true));




//todo  22. Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]


function U(a1, a2) {
    // return [...new Set([...a1, ...a2])];
    // return [...new Set(a1.concat(a2).sort((a,b)=>a-b))]
    return a1.concat(a2.filter(item => !a1.includes(item)))

}
console.log(U([1, 2, 3], [100, 2, 1, 10]))


//todo  23. Write a JavaScript function to find the difference between two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]


// set([1, 2, 3])   set( [100, 2, 1, 10])

function findDifArr(arr1, arr2) {
    let flatArr1= arr1.flat(Infinity)
    let flatArr2= arr2.flat(Infinity)
    console.log(flatArr1)
    console.log(flatArr2)
     let frist =flatArr1.filter(elm=>!flatArr2.includes(elm))      // [3]
     let second= flatArr2.filter(elm=>!flatArr1.includes(elm))   //[100,10]
     return [...frist, ...second]             
}
console.log(findDifArr([1, 2, 3], [100, 2, 1, 10]))
console.log(findDifArr([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]))



// function findDifArr(arr1, arr2) {
//     // Flatten arrays to handle nested arrays
//     let flatArr1 = arr1.flat(Infinity);
//     let flatArr2 = arr2.flat(Infinity);
  
//     // Convert arrays to Sets for fast lookup
//     let set1 = new Set(flatArr1);
//     let set2 = new Set(flatArr2);
  
//     // Find difference: items in set1 but not in set2
//     let diff1 = [...set1].filter(item => !set2.has(item));
  
//     // Find difference: items in set2 but not in set1
//     let diff2 = [...set2].filter(item => !set1.has(item));
  
//     // Combine both differences
//     return [...diff1, ...diff2];
//   }
  
//   // Test cases:
//   console.log(findDifArr([1, 2, 3], [100, 2, 1, 10])); // ["3", "100", "10"]
//   console.log(findDifArr([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]])); // ["6"]
//   console.log(findDifArr([1, 2, 3], [100, 2, 1, 10])); // ["3", "100", "10"]
  




// todo 24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

// todo 26. Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.

// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3

function tg(arr, t) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == t) {
                return [i, j]
            }
        }
    }
}

console.log(tg([10, 20, 10, 40, 50, 60, 70], 50))



// todo 27. Write a JavaScript function to retrieve the value of a given property from all elements in an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]













//todo  53. Write a JavaScript program to count the number of arrays inside a given array.

// Test Data :
// ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
// ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3
// Expected Output:
// Number of arrays inside the said array: 2
// Number of arrays inside the said array: 3



function countArr(arr) {
    let count = 0
    // [2,8,[6],3,3,5,3,4,[5,4]]  //   2,3 a.isArray count ++
    // let result = arr.filter((a) => Array.isArray(a) ? count + 1 : 0).length;
    // let result = arr.filter((a) => Array.isArray(a)).length;
    let result = arr.filter((a) => a.length).length
    return `Number of arrays inside the said array: ${result}`
}

console.log(countArr([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]]))
console.log(countArr([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]]))





//todo  52. Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.

// Test Data :
// ([2, NaN, 8, 16, 32]) -> [1]
// ([2, 4, NaN, 16, 32, NaN]) -> [2,5]
// ([2, 4, 16, 32]) ->[]
// Expected Output:
// Original array: 2,NaN,8,16,32
// Find all indexes of NaN of the said array: 1
// Original array: 2,4,NaN,16,32,NaN
// Find all indexes of NaN of the said array: 2,5
// Original array: 2,4,16,32
// Find all indexes of NaN of the said array:


function getNaNCount(arr) {
    // [2, NaN, 8, 16, 32] 
    return arr.map((a, i) => {
        if (isNaN(a)) {
            return i
        }
        return -1
    }).filter(elm => elm != -1)


}

console.log(getNaNCount([2, NaN, 8, 16, 32]))
console.log(getNaNCount([2, 4, NaN, 16, 32, NaN]))
console.log(getNaNCount([2, 4, 16, 32]))

