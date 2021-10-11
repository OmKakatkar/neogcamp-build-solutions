// Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

const readlineSync = require('readline-sync');
const userInputNumber = readlineSync.question('Enter a number: ');

let factorial = 1;
for(let i=1; i<=userInputNumber; i++) {
	factorial *= i
}

console.log(factorial)