// Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const readlineSync = require('readline-sync')
const userMonth = readlineSync.question("Enter a month number ");

const validMonthArr = [1,3,5,7,8,10,12]

if (validMonthArr.includes(Number(userMonth))) {
	console.log('The month has 31 days')
} else {
	console.log('Month has less than 31')
}