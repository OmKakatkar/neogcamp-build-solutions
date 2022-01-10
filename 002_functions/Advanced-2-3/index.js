// Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

/*
//	A function that defines a sort order. 
//	The function should return a negative, zero, or positive value, depending on the arguments:
//	function(a, b){return a-b}
//	When sort() compares two values, it sends the values to the compare function, 
//	and sorts the values according to the returned (negative, zero, positive) value.
//
//	Negative : a < b
//	Positive : a > b
//	Zero	 : a = b
*/
const sortArray = arr => arr.sort((a, b) => a - b);

console.log(sortArray([100, 83, 32, 9, 45, 61]));
