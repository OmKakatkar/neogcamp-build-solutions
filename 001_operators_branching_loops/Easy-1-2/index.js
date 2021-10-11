// Write a program to take a number input from user and determine whether the number is odd or even.

const readlineSync = require('readline-sync');
const number = readlineSync.question('Enter a number');

number % 2 ? console.log('Odd') : console.log('Even')