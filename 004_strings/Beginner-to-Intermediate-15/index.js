// Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case

// TIC TAc toe is a fun game

const readlineSync = require('readline-sync')
const str = readlineSync.question('Enter a string : ')

function getFirstSixLettersCapitalized(str) {
	return (
		str.slice(0,6).toUpperCase()+str.slice(6)
	)
}

console.log(getFirstSixLettersCapitalized(str))