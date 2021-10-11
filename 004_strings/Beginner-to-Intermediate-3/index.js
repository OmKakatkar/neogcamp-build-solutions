// Program that reads string and count number of characters present in the string

const readlineSync = require('readline-sync');
const str = readlineSync.question('Enter a string : ')

function getLengthOfString(str) {
	return str.length;
}

console.log(getLengthOfString(str))