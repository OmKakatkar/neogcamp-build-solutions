// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

let num1 = 0;
let num2 = 1;
let sum = 0;
console.log(num1);
console.log(num2)
for (let i = 0; i< 10; i++) {
	sum = num1 + num2;
	num1 = num2;
	num2 = sum;
	console.log(sum)
}