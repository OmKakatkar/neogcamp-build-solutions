// A program that reads three strings and prints the longest and smallest one
// Solution assumes that all strings are of different length

const readlineSync = require('readline-sync');
const str1 = readlineSync.question('Enter first string  : ')
const str2 = readlineSync.question('Enter second string : ')
const str3 = readlineSync.question('Enter third string  : ')

function getLongStr(str1, str2, str3) {
	let longest = "";

	if(str1.length > str2.length) {
		longest = str1
	} else {
		longest = str2
	}
	if(longest.length > str3.length) {
		return longest
	} return str3
}

function getShortStr(str1, str2, str3) {
	let shortest = "";

	if(str1.length < str2.length) {
		shortest = str1
	} else {
		shortest = str2
	}
	if(shortest.length < str3.length) {
		return shortest
	} return str3
}


console.log(getLongStr(str1, str2, str3), getShortStr(str1, str2, str3))