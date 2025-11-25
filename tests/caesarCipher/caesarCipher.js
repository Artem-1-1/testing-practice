const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const isLetter = (char) => alphabet.includes(char.toLowerCase());

const caesarCipher = (string, shift = 1) => {
  if(typeof string !== 'string') {
    return 'not a string';
  }


const shifted = (shift % 26 + 26) % 26;

let newString = '';

for(let i = 0;i < string.length; i++) {
  const char = string[i];
  const lowerChar = char.toLowerCase();

  if(isLetter(char)) {
    const currIndex = alphabet.indexOf(lowerChar);
    const newIndex = (currIndex + shifted) % 26;
    const newCharLower = alphabet[newIndex];

    if (char === char.toUpperCase()) {
      newString += newCharLower.toUpperCase();
    } else {
      newString += newCharLower;
    }
  } else {
    newString += char
  }
} 
  return newString;
}

module.exports = caesarCipher;