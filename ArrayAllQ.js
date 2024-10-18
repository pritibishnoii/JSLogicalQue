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
    for (j = 0; j < aar[i].length; j++) {
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
    let flatArr1 = arr1.flat(Infinity)
    let flatArr2 = arr2.flat(Infinity)
    // console.log(flatArr1)
    // console.log(flatArr2)
    let frist = flatArr1.filter(elm => !flatArr2.includes(elm))      // [3]
    let second = flatArr2.filter(elm => !flatArr1.includes(elm))   //[100,10]
    return [...frist, ...second]
}
console.log(findDifArr([1, 2, 3], [100, 2, 1, 10]))
console.log(findDifArr([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]))



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

let falsyVal = [NaN, false, undefined, '', null, 0];

const arrayy = [NaN, 0, 15, false, -22, '', undefined, 47, null];
function removeFalsyVal(arr) {
    // return arr.filter(elm=>!falsyVal.includes(elm))
    return arr.filter(elm => Boolean(elm))
}
console.log(removeFalsyVal(arrayy))




//todo  25. Write a JavaScript function to sort the following array of objects by title value.
// Sample object :

// var library = [ 
//    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//    ];
// Expected result :

// [[object Object] {
//   author: "Suzanne Collins",f
//   libraryID: 3245,
//   title:"Mockingjay:The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "Bill Gates",
//   libraryID: 1254,
//   title: "The Road Ahead"
// }, [object Object] {
//   author: "Steve Jobs",
//   libraryID: 4264,
//   title: "Walter Isaacson"
// }]
var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

const filterObject = (arr) => {
    return arr.sort((a, b) => a.title.localeCompare(b.title))


}
console.log(filterObject(library))








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

const fun = (arr) => {
    return arr.filter(elm => Boolean(elm))
}

console.log(fun([NaN, 0, 15, false, -22, '', undefined, 47, null]))




//todo  28. Write a JavaScript function to find the longest common starting substring in a set of strings.

// Sample array : console.log(longest_common_starting_substring(['go', 'google']));
// Expected result : "go"


// todo 29. Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.

// Test Data :
// console.log(num_string_range('a', "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]




function num_string_range(start, end, step) {
    let s = start.charCodeAt()
    let e = end.charCodeAt()
    let arr = []
    for (let i = s; i < e; i += step) {      //     97+2 99     99+2-101  101+2-> 103 ...... 
        console.log(i)
        arr.push(String.fromCharCode(i))
        console.log(String.fromCharCode(i))

    }
    return arr

}
console.log(num_string_range('a', 'z', 2))



// 30. Write a JavaScript function that merges two arrays and removes all duplicate elements.

// Test data :
var arr1 = [1, 2, 3];
var arr2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]

let mergeArr = [...new Set([...arr1, ...arr2])]
console.log(mergeArr)






// todo 31. Write a JavaScript function to remove a specific element from an array.

// Test data :
// console.log(remove_array_element([2, 5, 9, 6], 5));
// [2, 9, 6]


function removeElm(arr, n) {
    let index = arr.indexOf(n)  // 1    
    // return   arr.slice(0,index).concat(arr.slice(index+1))  // arr[2]      - > index+1-1+1- >2,... [9,6 ]

    // splice()
    // return arr.splice(0,index).concat(arr.slice(index))
    return arr.filter(elm => elm !== n)


}
console.log(removeElm([2, 5, 9, 6], 5))





//todo  32. Write a JavaScript function to find an array containing a specific element.

// Test data :
// arr = [2, 5, 9, 6];
// console.log(contains(arr, 5));
// [True]


function findSpElm(arr, elm) {
    return arr.includes(elm)


    // for(let i=0;i<arr.length;i++){
    //     if(arr[i]==elm){
    //         return true
    //     }
    //     return false
    // }

}
console.log(findSpElm([2, 5, 9, 6], 5))
console.log(findSpElm([2, 5, 9, 6], 8))






// 33. Write a JavaScript script to empty an array while keeping the original.

const card = [2, 5, 9, 6]
console.log(card)
card.length = 0
console.log(card)


//todo  34. Write a JavaScript function to get the nth largest element from an unsorted array.

// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89

function nthlargest(arr, pos) {
    return arr.sort((a, b) => b - a)[pos - 1]

}
console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4))

console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 2));
console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 1));






// todo 35. Write a JavaScript function to get random items from an array.
const product = ['mobile', 'laptop', 'iphone', 'tablet', 'tv'];

function randomItem(arr) {
    let randomNum = Math.floor(Math.random() * arr.length)
    console.log(arr[randomNum])
    return arr[randomItem]
}

console.log(randomItem(product))





// todo 36. Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array.

// Test Data :
// console.log(array_filled(6, 0));
// [0, 0, 0, 0, 0, 0]
// console.log(array_filled(4, 11));
// [11, 11, 11, 11]


function myArr(len, elm) {
    return new Array(len).fill(elm)
}
console.log(myArr(6, 0))
console.log(myArr(4, 11))




// todo 37. Write a JavaScript function to create a specified number of elements with a pre-filled string value array.

// Test Data :
// console.log(array_filled(3, 'default value'));
// ["default value", "default value", "default value"]
// console.log(array_filled(4, 'password'));
// ["password", "password", "password", "password"]
console.log(myArr(4, "password"))



//todo  38. Write a JavaScript function to move an array element from one position to another.

// Test Data :
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// [20, 30, 10, 40, 50]
// console.log(move([10, 20, 30, 40, 50], -1, -2));
// [10, 20, 30, 50, 40]




function move(arr, s, e) {
    let n = arr.length
    if (s < 0) s += n;       // 5     
    if (e < 0) e += n;       // 5

    const removedElem = arr.splice(s, 1)   // s=0 1 10    [50] [10]
    console.log(arr)
    arr.splice(e, 0, ...removedElem)
    console.log(arr)
    // splice(e, 0, removedElem[0])   

    return removedElem

}




console.log(move([10, 20, 30, 40, 50], 0, 2))
console.log(move([10, 20, 30, 40, 50], -1, -2))




// todo 39. Write a JavaScript function to filter false, null, 0 and blank values from an array.

// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]

function removeaFalsy(arr) {
    return arr.filter(elm => Boolean(elm))
}

console.log(removeaFalsy([58, '', 'abcd', true, null, false, 0]))





// todo 40. Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.

// Test Data :
// console.log(array_range(1, 4));
// [1, 2, 3, 4]
// console.log(array_range(-6, 4));
// [-6, -5, -4, -3]             

function array_range(start, len) {
    // let arr=[]
    let arr = new Array()
    for (let i = 0; i < len; i++) {    // i-> 0,1,2,3
        arr.push(start + i)       //[].push(1+0) --- > [1]  --> [1,].push(1+1)-->2=]--> [1,2] --> [1,2].push(1+2)=3--> [1,2,3] --> [1,2,3].push(1+3)-4->[1,2,3,4]
    }
    return arr
}


function array_range(start, len) {
    let arr = new Array(len)         //create arr of  4 
    // console.log(arr)
    for (let i = 0; i < len; i++, start++) {    //start= 1 -->++ 2 ++3 ++4 
        arr[i] = start;
    }
    return arr

}

console.log(array_range(1, 4))
console.log(array_range(-6, 4));



// todo 41. Write a JavaScript function to generate an array between two integers of 1 step length.

// Test Data :
// console.log(rangeBetwee(4, 7));
// [4, 5, 6, 7]
// console.log(rangeBetwee(-4, 7));
// [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
function arrayRange(start, len) {
    //
    let result = []
    for (let i = start; i <= len; i++) {
        result.push(i)
    }
    return result
}
console.log(arrayRange(4, 7))
console.log(arrayRange(-4, 7))






// todo 42. Write a JavaScript function to find unique elements in two arrays.

// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["1", "2", "3", "4", "5", "6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]
// Click me to see the solution

function difference(a1, a2) {

    a1 = a1.flat(Infinity)
    a2 = a2.flat(Infinity)
    return [...new Set([...a2, ...a1])].sort((a, b) => a - b)

}
console.log(difference([1, 2, 3], [100, 2, 1, 10]))
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]))





//  todo 43. Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip.

// Test Data :
// unzip([['a', 1, true], ['b', 2, false]])
// unzip([['a', 1, true], ['b', 2]])
// Expected Output:
// [["a","b"],[1,2],[true,false]]
// [["a","b"],[1,2],[true]]

function unzip(arr) {
    //  

    let result = [];

    // Iterate over each sub-array
    for (let i = 0; i < arr[0].length; i++) {
        // 0,1,2 ---3 len=3 

        result.push(arr.map(subArray => subArray[i])); // Create new arrays for each "column" 
        // 
        //   return arr[0].map((_, i) => arr.map(subArray => subArray[i]));

        //   return arr[0].map((_,i)=>arr.map(elm=>elm[i]))
    }

    return result;

    // let result = []
    // let res1=[]
    // let res2=[]
    // let res3= []
    // for(let i=0;i<arr.length;i++){
    //   res1.push(arr[i][0])
    //   res2.push(arr[i][1])
    //   res3.push(arr[i][2])
    //   result = [res1,res2,res3] 
    // }

    // return result

}
console.log(unzip([['a', 1, true], ['b', 2, false]]))



//todo  48. Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.

// Test Data :
// ([2,3,5,7]) -> true
// ([2,3,5,7,8]) -> false
// Expected Output:
// Original array of integers: 2,3,5,7
// In the said array check every numbers are prime or not! true
// Original array of integers: 2,3,5,7,8
// In the said array check every numbers are prime or not! false

function checkPrime(arr) {

    const isPrime = (num) => {
        if (num < 1) return false;
        // console.log(Math.sqrt(num))
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % 2 == 0) {
                return false
            }
        }
        return true
    }
    let allPrime = arr.every(isPrime)
    console.log(allPrime)
    return allPrime


}
console.log(checkPrime([2, 3, 5, 7]))
console.log(checkPrime([2, 3, 5, 7, 8]))






//  todo 49. Write a JavaScript program that takes an array of numbers and returns the third smallest number.

// Test Data :
// (2,3,5,7,1) -> 3
// (2,3,0,5,7,8,-2,-4) -> 0
// Expected Output:
// Original array of numbers: 2,3,5,7,1
// Third smallest number of the said array of numbers: 3
// Original array of numbers: 2,3,0,5,7,8,-2,-4
// Third smallest number of the said array of numbers: 0



function nthSmallestElm(arr) {
    return arr.sort((a, b) => b - a)[arr.length - 3]
    return arr.sort((a, b) => a - b)[2]

}
console.log(nthSmallestElm([2, 3, 5, 7, 1]))
console.log(nthSmallestElm([2, 3, 0, 5, 7, 8, -2, -4]))






// todo 50. Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

// Test Data :
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25
// Expected Output:
// Original array: 2,11,3,a2,false,5,7,1
// Sum all numbers of the said array: 18
// Original array: 2,3,0,5,7,8,true,false
// Sum all numbers of the said array: 25

function calculatesSum(arr) {
    return arr.filter(num => typeof num == "number").reduce((sum, num) => sum += num, 0)
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
            sum += arr[i]
        }
    }
    return sum


}
console.log(calculatesSum([2, "11", 3, "a2", false, 5, 7, 1]))






// todo 51. Write a JavaScript program to check if an array is a factor chain or not.

// A factor chain is an array in which the previous element is a factor of the next consecutive element. The following is a factor chain:
// [2, 4, 8, 16, 32]
// // 2 is a factor of 4
// // 4 is a factor of 8
// // 8 is a factor of 16
// // 16 is a factor of 32

// Test Data :
// ([2, 4, 8, 16, 32]) -> true
// ([2, 4, 16, 32, 64]) -> true
// ([2, 4, 16, 32, 68]) -> false
// Expected Output:
// Original array:
// Check the said array is a factor chain or not?
// true
// Original array:
// Check the said array is a factor chain or not?
// true
// Original array:
// Check the said array is a factor chain or not?
// false



function checkFactor(arr) {
    return arr.every((num, index) => {
        if (index === 0) return true; // Skip the first element
        return num % arr[index - 1] === 0; // Check if the current number is divisible by the previous one
      });


    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] % arr[i] !== 0) {
            return false
        }
    }
    return true
}
console.log(checkFactor([2, 4, 8, 16, 32]))
console.log(checkFactor([2, 4, 16, 32, 68]))


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

















