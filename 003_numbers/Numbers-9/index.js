// Write a JavaScript program to compute the sum of all digits that occur in a given string.

// Input: 1234
// Output: 1+2+3+4 = 10

const readlineSync = require('readline-sync');
const num = readlineSync.question("Enter a number : ");

function getSumOfDigitsInString(str) {
	let sum = 0;
	for (let i in str) {
		sum += Number(str[i]);
	}
	return sum;
}

console.log(getSumOfDigitsInString(num))