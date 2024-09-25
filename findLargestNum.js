function findLargest(numArr) {
	return Math.max(...numArr);
}

console.log(findLargest([3, 5, 7, 2, 8])); // 8

const findMaxNum = (num) => {
	let max = num[0];
	for (let i = 1; i < num.length; i++) {
		if (num[i] > max) {
			max = num[i];
		}
	}
	return max;
};

// console.log(max); // outputs 5
console.log(findMaxNum([3, 9, 7, 2, 8]));

// 3>0 -true
// max= 3
// i++  i=1

// 9>3 -true
// max= 5
// i++ 2

// 7>5-true
// max =7
// i++ i=3

// 2>7 false
// i++  i=4

// 8>7 true
// max= 8
const numbers = [4, 5, 1, 3];
numbers.sort((a, b) => b - a);
const largest = numbers[0];
console.log(largest); // outputs 5
