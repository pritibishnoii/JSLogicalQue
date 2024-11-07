// TODO 1 A prime number is a positive integer that is only divisible by 1 and itself. For example, 2, 3, 5, 7, 11 are the first few prime numbers.

function isPrime(num) {
	if (num <= 1) return false; // 0 and 1 are not prime numbers
	for (let i = 2; i < num; i++) {
		if (num % i === 0) return false; // If divisible, not a prime number
	}
	return true; // If no divisors, it's prime
}

console.log(isPrime(11));
console.log(isPrime(25));










// Online JavaScript Compiler
// Run JavaScript code without any setup

function prime_numbers(n){
	/* Function to store first n prime_numbers in an array
	Return the array containing the prime numbers */
		function isPrime(num) {
			// Function to check if a number is prime
			if (num <= 1) return false; // 0 and 1 are not prime numbers
			for (let i = 2; i <= Math.sqrt(num); i++) {
				if (num % i === 0) return false; // If divisible, it's not prime
			}
			return true; // If no divisors found, it's prime
		}
	
		const primes = []; // Array to store prime numbers
		let count = 0; // Counter for the number of primes found
		let num = 2; // Starting number to check for primes
	
		while (count < n) {
			if (isPrime(num)) {
				primes.push(num); // Add prime number to the array
				count++; // Increment the prime counter
			}
			num++; // Move to the next number
		}
	
		return primes; 
		
		
	}


	console.log(prime_numbers(5))










	// subarray
	let arr = [1,2,3,4,5];
	


	for(let i=0;i<arr.length;i++){
		for(let j=i;j<arr.length;j++){
			let subArr=''
			for(let k = i;k<=j;k++){
				subArr+= arr[k]
			}
			console.log(subArr)
		}
	}






	function findMissingNumber(nums) {
		const n = nums.length + 1; // Total numbers expected including the missing one
		let sum_n = 0; // Initialize sum for range [1, n]
		let sum_nums = 0; // Initialize sum for array elements
	
		// Calculate sum of all numbers from 1 to n
		for (let i = 1; i <= n; i++) {
			sum_n += i;
		}
	
		// Calculate sum of all elements in nums
		for (let num of nums) {
			sum_nums += num;
		}
	
		// The missing number is the difference
		return sum_n - sum_nums;
	}

console.log(findMissingNumber([1,3,4]))







// Task details

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]

// Output: [1,3,6,10]


// // sum=0 ;
// [1]
// // 1+0= 1
// // sum=1   2 1+2 = 3 
// [3]
// // sum = 3 3 3+3 = 6 ;
// [6]
// // sum 6 = 4+6 = 10 
// [10]




function runningSum(arr){
	let sum =0;
	let newArr= [];
	for(let i=0;i<arr.length;i++){
		sum+=arr[i];   //1
		newArr.push(sum)
	}
	return newArr
}
console.log(runningSum([1,2,3,4]));




// Write a program to sort the array in descending order using Bubble sort algorithm. After Sorting return the array.

// Note both the array and size is already given.

// Input:-

// [4,3,2,5,1]



// Output:-

// [5,4,3,2,1]



