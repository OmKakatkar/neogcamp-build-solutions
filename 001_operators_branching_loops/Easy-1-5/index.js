// Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

const num1 = 35;
const num2 = 29;
const num3 = 46;

let min = 0;

if (num1 < num2) {
	min = num1;	
} else {
	min = num2;
} 

if (num3 < min) {
	min = num3
}

console.log(min)