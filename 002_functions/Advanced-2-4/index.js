// Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen

function reverseCharactersOfWord(sentence) {
	const words = sentence.split(' ');
	return words.map(word => {
		return word.split('').reverse().join('')
	}).join(' ')
}

console.log(reverseCharactersOfWord('we are neoGrammers') )