/*
  Check to see if two provided strings are anagarams of eachother.
  
  One string is anagram of another if it uses the same characters in the same quanity. Only consider characters, not spaces or punctuation.

  Consider capital letters to be same as lower case letters.

  --Examples
  
  anagrams('rail safety', 'fairy tales') -> True
  anagrams('RAIL! SAFETY!', 'fairy tales') -> True
  anagrams('Hi there', 'Bye there') -> False
*/

// Here we will use the same charMap technique, we used in 4-maxChar.js problem.

function anagrams(stringA, stringB) {
  const stringACharMap = characterMapCreatorFunction(stringA);
  const stringBCharMap = characterMapCreatorFunction(stringB);

  // If keys length of both charMap object is diff return false.
  if (Object.keys(stringACharMap).length !== Object.keys(stringBCharMap).length) {
    return false;
  }

  // If both charMap object value is diff for same key return false.
  for (let key in stringACharMap) {
    if (stringACharMap[key] !== stringBCharMap[key]) {
      return false;
    }
  }

  // Else return true.
  return true;
}

// Helper function to build charMap object.
function characterMapCreatorFunction(str) {
  const charMap = {};
  // This regex checks if a char is alphabet letter.
  const letterRegex = /^[a-zA-Z]+$/;

  str.split("").forEach(char => {
    if (letterRegex.test(char)) {
      charMap[char.toLowerCase()] = charMap[char.toLowerCase()] + 1 || 1;
    }
  });

  return charMap;
}

console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));