// Write a program that takes two strings and copies smaller string into bigger string

const readlineSync = require('readline-sync')
const str1 = readlineSync.question("Enter first string : ")
const str2 = readlineSync.question("Enter second string : ")

function concatToBiggerString(str1, str2) {
	if(str1.length > str2.length) {
		return `${str1} ${str2}`
	} return `${str2} ${str1}`
}

console.log(concatToBiggerString(str1, str2))