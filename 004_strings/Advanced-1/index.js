// Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string

const readlineSync = require("readline-sync");

const userInput = readlineSync.question("Enter a string: ").split("");
const charToReplace = readlineSync
  .question("Enter a character to replace: ")
  .toLowerCase();
const charReplaceBy = readlineSync.question(
  "Enter a character to replace by: "
);
// Find better names and prompts

let myStr = userInput.map((ch) => {
  return ch.toLowerCase() === charToReplace ? charReplaceBy : ch;
});
console.log(myStr.join(""));
