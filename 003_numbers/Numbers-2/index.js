// Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

// Input: P=100, R=6%, T=2
// Output: 12

const readlineSync = require('readline-sync');
const inputPrincipal = readlineSync.question('Enter Principal Amount : ');
const inputRate = readlineSync.question('Enter Rate : ');
const inputTime = readlineSync.question('Enter Time(in Years) : ');

function getSimpleInterest(principal, time, rate) {
	return (principal * time * rate) / 100;
}

console.log('Simple Interest : ' + getSimpleInterest(inputPrincipal, inputRate, inputTime))

