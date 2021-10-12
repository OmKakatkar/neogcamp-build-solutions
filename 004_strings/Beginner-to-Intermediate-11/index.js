// Given a string, determine if it is a palindrome, considering only alphanumeric characters

const readlineSync = require('readline-sync')
const str = readlineSync.question('Enter a string : ').toLowerCase();

function checkPalindrome(str) {
	if(str === str.split('').reverse().join('')) {
		return true		
	} return false
}

console.log(checkPalindrome(str) ? 'Palindrome' : 'Not a palindrome')
