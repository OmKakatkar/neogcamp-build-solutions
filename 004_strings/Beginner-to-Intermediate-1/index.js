// Write a program that converts the string into uppercase

const readlineSync = require('readline-sync');
const myStr = readlineSync.question('Enter a string : ')


function getUpperCase(str) {
	return str.toUpperCase();
}

console.log(getUpperCase(myStr))