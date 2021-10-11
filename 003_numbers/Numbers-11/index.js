// Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.

// Example-

// Enter a Number : 1234
// Enter the Number of Rotations : 2
// Output : 3412

const readlineSync = require('readline-sync');
const num = readlineSync.question("Enter a Number : ");
const rotCount = readlineSync.question("Enter the Number of Rotations : ");


function getRotatedNumber(num, rotCount) {
	let rotNumArr = num.split('');
	return ([...rotNumArr.slice(rotCount), ...rotNumArr.slice(0,rotCount)].join(''))
}

console.log('Output : ' + getRotatedNumber(num, rotCount))