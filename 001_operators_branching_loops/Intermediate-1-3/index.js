// Write a program to take a number input from user and print multiplication table 12 times for that number.

const readlineSync = require('readline-sync');
const userNumber = readlineSync.question('Enter a number: ');

for (let i = 1; i<= 12; i++) {
	console.log(userNumber + ' x ' + i + ' = ' + userNumber * i)
}