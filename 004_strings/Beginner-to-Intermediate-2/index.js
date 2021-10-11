// Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood

const readlineSync = require('readline-sync');
const str1 = readlineSync.question('Enter first string : ')
const str2 = readlineSync.question('Enter second string : ')


function getAppendedString(str1, str2) {
	return (str2 + str1);
}

console.log(getAppendedString(str1, str2))