// Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

const toSentenceCase = sentence => {
    const words = sentence.split(' ');
    return words
        .map(word => {
            return word[0].toUpperCase() + word.slice(1);
        })
        .join(' ');
};

console.log(toSentenceCase('we are neoGrammers'));
