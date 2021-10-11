// Write a JavaScript program that reverses a number.

// Example:

// Input:  32243;
// Output:  34223

const readlineSync = require('readline-sync');
const num = readlineSync.question('Enter a number : ');

function reverseNumber(num) {
	return num.split('').reverse().join('');
}

console.log('Output : ' + reverseNumber(num))