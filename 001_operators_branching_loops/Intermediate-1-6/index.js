// Write a Program to take a number input from user and find if the number is Prime or not.

const readlineSync = require('readline-sync');
const userInputNumber = readlineSync.question('Enter a number: ');

let isPrime = true
for (let i=2; i<userInputNumber; i++) {
	if(userInputNumber % i == 0) {
		isPrime = false
	}
}

if(isPrime) {
	console.log('Prime')
} else {
	console.log('Not Prime')
}