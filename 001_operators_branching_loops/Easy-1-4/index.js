// Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

const num1 = 8;
const num2 = 23;
const num3 = 17;

let max = 0;

if(num1 > num2) {
	max = num1
} else {
	max = num2
}

if(max < num3) {
	max = num3
}

console.log(max)