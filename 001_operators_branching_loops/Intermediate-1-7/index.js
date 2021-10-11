// Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

const readlineSync = require('readline-sync');
const userInputDay = readlineSync.question('Enter a day: ');

const weekday = ['monday','tuesday','wednesday','thursday','friday'];

const weekend = ['saturday','sunday'];

if(weekday.indexOf(userInputDay.toLowerCase()) != -1) {
	console.log("weekday")
} else if(weekend.indexOf(userInputDay.toLowerCase()) != -1) {
	console.log("weekend")
} else {
	console.log("Invalid day")
}
