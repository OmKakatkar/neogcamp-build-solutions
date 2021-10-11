// Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45

const readlineSync = require('readline-sync');
const str = readlineSync.question('Enter a string : ')

function getNumericValue(str) {
	return str.match(/\d+/g)[0]
	// Here instead str.match(/\d+/g)[0] we can use str.match(/\d+/g).join('')
}

console.log(getNumericValue(str))

// Again used Regex
// Might be possible with Filter, but Regex is simpler