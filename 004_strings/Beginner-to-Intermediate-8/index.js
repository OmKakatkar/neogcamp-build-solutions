// A program that counts number of vowels and consonants in a String?
// Seems like another Regex question

const readlineSync = require('readline-sync');
const str = readlineSync.question('Enter a string : ');

// Match return null if nothing is found which is a falsy value. So the empty array [] will be returned

// Select only aeiou
const vowelCount = (str.match(/[aeiou]/gi) || []).length

// Select all consonants
// Wow regex is tough
const consonantCount = (str.match(/[a-z](?![aeiou])/gi) || []).length


// Getting all vowels with filter
// const vowels = ['a', 'e', 'i', 'o', 'u']

// const vowelCount = str.split('').filter(ch => vowels.includes(ch)).length

// const consonantCount = str.length - vowelCount

console.log(`Vowels: ${vowelCount}, Consonants ${consonantCount}`)
