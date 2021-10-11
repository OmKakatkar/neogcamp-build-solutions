// Write a Program to convert Decimal to Binary.

// Enter the number to convert: 5
// Binary of Given Number is=101

const readlineSync = require('readline-sync');
const decimalNumber = readlineSync.questionInt('Enter the number to convert : ');

function decimalToBinary(num) {
	return num.toString(2);
}

console.log('Binary of Given Number is = ' + decimalToBinary(decimalNumber))


