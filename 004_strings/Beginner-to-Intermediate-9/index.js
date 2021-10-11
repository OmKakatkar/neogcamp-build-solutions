// Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()

const readlineSync = require('readline-sync');
const str = readlineSync.question("Enter a string : ")

function getStringLength(str) {
	let length = 0;
	while(str[length] != undefined) {
		length++
	}
	return length
}

console.log(getStringLength(str) > 7 ? true : false);