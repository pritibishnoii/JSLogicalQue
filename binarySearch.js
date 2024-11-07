
// binary search 


function binarySearch(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] == target) {
            return mid;
        }
        else if (nums[mid] < target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1
}


let arr = [1, 2, 3, 5, 6, 7, 9]

console.log(binarySearch(arr, 7))
console.log(binarySearch(arr, 3))
console.log(binarySearch(arr, 5))







//todo  1. Find First and Last Position of an Element in a Sorted Array
// Problem: Given a sorted array, find the starting and ending position of a target value. If the target is not found, return [-1, -1].

function searchRange(nums, target) {
    // Helper function to find the first position
    const findFirst = (nums, target) => {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return nums[left] === target ? left : -1;
    };

    // Helper function to find the last position
    const findLast = (nums, target) => {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return nums[right] === target ? right : -1;
    };

    const first = findFirst(nums, target);
    if (first === -1) return [-1, -1]; // target not found
    const last = findLast(nums, target);
    return [first, last];
}

// Example
console.log(searchRange([5,7,7,8,8,10], 8));  // Output: [3, 4]
console.log(searchRange([5,7,7,8,8,10], 9));  // Output: [3, 4]
console.log(searchRange([5,7,7,8,8,10], 5));  // Output: [3, 4]




//todo  2. Find Peak Element
// Problem: A peak element is greater than its neighbors. Given an array, find the peak element's index.




function findPeak(nums){

    let low=0;
    let high = nums.length-1;
    while(low<high){
        let mid = Math.floor((low+high)/2);
        if(nums[mid]<nums[mid+1]){     // 3<5 true 
            low= mid+1;               // low = 5 index=4  
        }
        else{
            high=mid       
        }

    }
    return low 
       

}

console.log(findPeak([1,2,1,3,5,6,4]))










// using recursion 


function binary_search(arr,target,low,high){

        // Base Condition
    if (low > high) return false;

    // Find the middle index
    let mid = Math.floor((low + high) / 2);

    // Compare mid with given key t
    if (arr[mid] === target) return true;

    // If element at mid is greater than t,
    // search in the left half of mid
    if (arr[mid] > target)
        return binary_search(arr, target, low, mid - 1);
    else

        // If element at mid is smaller than x,
        // search in the right half of mid
        return binary_search(arr, target, mid + 1, high);



}
let arrr = [1, 3, 5, 7, 8, 9];
// let x = 5;
let x = 8;
let l = 0;
let h= arr.length-1

console.log(binary_search(arr,x,l,h))






/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

// *******************************************************************************/
// #include <bits/stdc++.h>
// using namespace std;

// int switches(vector<string> &arr){
//     unordered_map<string,int> priti;
    
//     for(int i=0;i<arr.size();i++){
//         string c=arr[i];
//         priti[c]++;
//     }
//     int onbulbs=0;//count
//     for(auto it:priti){
//         if(it.second % 2!=0){
//             onbulbs++;
//         }
//     }
//     return onbulbs;
// }

// int main()
// {

//     vector<string> arr1={"1", "2", "3", "4", "5","5"};
//     int answer=switches(arr1);
//     cout<<answer;

//     return 0;
// }


















