// Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5

const arrayLength = arr => arr.reduce(len => len + 1);

console.log(arrayLength([1, 5, 3, 7, 8]));
