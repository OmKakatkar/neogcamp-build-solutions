// Write a program that converts string like "124" to 124

const readlineSync = require('readline-sync');
const str = readlineSync.question('Enter a string : ')

function getConvertedString(str) {
	return Number(str);
}

console.log(getConvertedString(str))