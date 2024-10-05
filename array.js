// todo 1 - Find the Largest Number in an Array

const largestNumber = (arr) => {
  return Math.max(...arr);
};

console.log(largestNumber([1, 3, 7, 2, 5]));

function largestNum(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
//max=1 <3 true i++
//max=3 <7 true i++
//max=7<2 false i++
//max=7<12 true i++
//max=12<8 false i++
//max=12<6 false
console.log(largestNum([1, 3, 7, 2, 12, 8, 6]));

// todo 2 . remove duplicate

const removeDuplicates = (arr) => {
  // return [...new Set(arr)];
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

//  todo 3

function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4]));
// Output: true
console.log(isSorted([1, 3, 2, 4]));
// Output: false

// ***********************************************************************************

// todo 4 Find the Intersection of Two Arrays(common elements)

function arrayIntersection(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}
console.log(arrayIntersection([1, 2, 3], [2, 3, 4]));
// o/p [2,3]
