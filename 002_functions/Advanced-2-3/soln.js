// Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

// Using insertion sort as array size is small
const sortArray = arr => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        for (let j = i - 1; j >= 0; j--) {
            if (current < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
    return arr;
};

console.log(sortArray([100, 83, 32, 9, 45, 61]));
