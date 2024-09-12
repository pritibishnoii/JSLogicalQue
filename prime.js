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
