// Write a Program to Print N Odd Number in Descending Order.

// Input : 4
// Output : 7
// 5
// 3
// 1

const readlineSync = require('readline-sync');
const countNum = readlineSync.questionInt('Enter a number : ');

function getOddNumbers(count) {
	let oddNumbers = [1];
	for (let i = 0; i < count - 1; i++) {
		oddNumbers.push(oddNumbers[i] + 2)
	}

	return oddNumbers.reverse().join('\n');
}

console.log(getOddNumbers(countNum))