// Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

// Input: CP = 1500, SP = 2000
// Output: 500 Profit

// Input: CP = 3125, SP = 1125
// Output: 2000 Loss

const readlineSync = require('readline-sync');
const costPrice = readlineSync.question('Enter Cost Price : ');
const sellPrice = readlineSync.question('Enter Selling Price : ');

function profitOrLoss(cp, sp) {
	if (cp < sp) {
		return `${sp - cp} Profit`
	} return `${cp - sp} Loss`
}

console.log(profitOrLoss(costPrice, sellPrice))
