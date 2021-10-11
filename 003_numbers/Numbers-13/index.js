// Follow up Question : Write a Program to Convert Octal to Decimal.

// Enter an octal number: 116
// Octal of Given Number = 78 in decimal

const readlineSync = require('readline-sync');
const octalNumber = parseInt('0' + readlineSync.question('Enter an octal number : '), 8);

function octalToDecimal(octalNumber) {
	return octalNumber.toString(10);
}

console.log(octalToDecimal('Octal of Given Number = ' + octalNumber + ' in decimal'))