// Write a program to delete all vowels from a string. Assume string is not more than 80 characters long

const readlineSync = require('readline-sync');
const str = readlineSync.question('Enter a string : ')

function getModifiedString(str) {
	return str.replace(/[aeiou]/gi, '')
}

// The above solution uses Regex

// We can use filter as well

// const vowels = ['a', 'e', 'i', 'o', 'u']
// function getModifiedString(str) {
// 	return str.split('').filter(char => {
// 		return vowels.indexOf(char.toLowerCase()) === -1
// 	}).join('')
// }
console.log(getModifiedString(str))

