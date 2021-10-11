// Write a program to calculate sum of N natural digits, as input by the users?

// Enter a positive integer: 100
// Sum = 5050

const readlineSync = require('readline-sync');
const countNum = readlineSync.questionInt('Enter a number : ');

function getSumOfDigits (n) {
	return (n * (n+1)) / 2
}

console.log(getSumOfDigits(countNum))