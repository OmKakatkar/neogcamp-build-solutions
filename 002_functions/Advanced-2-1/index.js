// Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.


function encodeString(str, key) {
	const lower = 'abcdefghijklmnopqrstuvwxyz';
	const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	
	return str.split('').map(char => {
		return cipher(char);
	}).join('');

	function cipher(char) {
		let alphabet = '';
		let pos = 0;
		let newPos = 0;

		if('a' <= char && char <= 'z') {
			alphabet = lower

		} else if('A' <= char && char <= 'Z') {
			alphabet = upper

		} else {
			return char;
		}

		pos = alphabet.indexOf(char);
		newPos = getCipherPosition(pos, key)
		return alphabet.charAt(newPos)
	}

	function getCipherPosition(pos, key) {
		return (pos + key) % 26;
	}
}

console.log(encodeString("neogcamp", 2))