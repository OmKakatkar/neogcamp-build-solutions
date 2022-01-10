// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

const replace = (arr, num1, num2) => {
    const replacedArr = arr.map(item => {
        if (item === num1) {
            return num2;
        } else return item;
    });
    return replacedArr;
};

console.log(replace([1, 5, 3, 5, 6, 8], 5, 10));
