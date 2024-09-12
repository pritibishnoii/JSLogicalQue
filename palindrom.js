function checkPalindrom(string) {
	// 1.  splite the string into array
	let reverseString = string.split("").reverse().join("");
	return string === reverseString;
}

console.log(checkPalindrom("madam"));

function checckPalindromNum(num) {
	let reverseNum = num.toString().split("").reverse().join("");
	return reverseNum == num;
}
console.log(checckPalindromNum(121));

let reverseNum = 0;
function checkPalindromNum(num) {
	let tempNum = num;
	while (tempNum != 0) {
		let rem = tempNum % 10;
		reverseNum = reverseNum * 10 + rem;
		console.log(reverseNum);
		tempNum = Math.floor(tempNum / 10);
	}
	return reverseNum == num;
}

console.log(checkPalindromNum(121));

// while(121!=0){
//121    121%10--- > 1
// 0*10+1----> 0+1--> 1
//121  --- > 121/10   12.1  --> 12
// }

// while(12!=0){
//12 --- 12%10 --> 2
// 1*10 +2-->  12
//  12 -- 12/10 --> 1.2 ---->1
// }
//   while(1!=0){
// 1 --> 1%10 --> 1
//--> 12*10+1--- >120+1 -->121
// 1/10 -- > 0.1  - 0
// }

// const checkPrime = (num) => {
// 	let i = 0;
// 	let j = num.length - 1;

// 	while (i < j) {
// 		if ((num[i] -= num[j])) {
// 			return true;
// 		}
// 		i++, j--;
// 		return false;
// 	}
// };

// console.log(checkPrime(121));

function isPalindrome(num) {
	return num.toString() === num.toString().split("").reverse().join("");
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false
console.log(isPalindrome(12321)); // true
