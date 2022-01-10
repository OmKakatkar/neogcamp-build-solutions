// Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.

const encodeString = (str, key) => {
    /*
	//	The encodeString function takes a string and a key to shift the characters.
	//	It returns an encoded string
	*/
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    /*
	//  The cipher function takes a character. Preferrably a string type. 
	//  Returns the shifted character. 
	*/
    let cipher = char => {
        let alphabet = '';
        let pos = 0;
        let newPos = 0;

        if ('a' <= char && char <= 'z') {
            alphabet = lower;
        } else if ('A' <= char && char <= 'Z') {
            alphabet = upper;
        } else {
            return char;
        }

        pos = alphabet.indexOf(char); //calculate the position of current char in lower/upper
        newPos = getCipherPosition(pos, key); //calculate the shifted position
        return alphabet.charAt(newPos);
    };

    /*
	//  The getCipherPosition function takes position of the character and the shifting key.
	//  Returns the shifted position.
	*/
    let getCipherPosition = (pos, key) => (pos + key) % 26;

    return str
        .split('')
        .map(char => {
            return cipher(char);
        })
        .join('');
};

console.log(encodeString('neogcamp', 2));
