// Write a program that masks all but last four characters of the string "5565534276455423" to '#'

// ############5423

const readlineSync = require('readline-sync')
const str = readlineSync.question('Enter a string : ')

function getMaskedString(str, len) {
	let strArr = str.substring(0, len-4);
	return ('#'.repeat(strArr.length)+str.substring(len-4, len))	
}

console.log(getMaskedString(str, str.length))