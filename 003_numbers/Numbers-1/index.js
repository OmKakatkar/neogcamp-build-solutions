// Write a program to input 2 numbers and display the sum of the numbers to the console.

// Input Number 1: 20
// Input Number 2: 40
// Sum : 60

const readlineSync = require('readline-sync');
const num1 = Number(readlineSync.question('Input Number 1: '))
const num2 = Number(readlineSync.question('Input Number 2: '))

function sum (num1, num2) {
	return num1 + num2;
}

console.log('Sum : ' + sum(num1, num2))

