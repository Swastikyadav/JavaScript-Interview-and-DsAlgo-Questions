/*
  Given a string, return the character that is most commonly used in the string.

  --Examples

  maxChar("abcccccd") === "c"
  maxChar("apple 12311111") === "1"
*/

/*
  Any problem related to counting the number of occurrence can be solved with the following trick.

  Create an object (character map) with key as character and value as number of times that character occurs.

  --Example

  "Hello World!"

  {
    H: 1,
    e: 3,
    l: 2,
    o: 1,
    " ": 1,
    w: 1,
    r: 1,
    d: 1,
    !: 1,
  }
*/

function maxChar(str) {
  let charMap = {};
  let resultCharMap = {};
  let maxCharCount = 0;
  let maxCharStr = "";

  // Create the object with key as char and value as number of time char occurs.
  for (let i = 0; i < str.length; i++) {
    charMap[str[i]] = charMap[str[i]] + 1 || 1;
  }

  // Solution 1: This came to me in first attempt.

  /*
  for (key in charMap) {
    if (Object.keys(resultCharMap).length) {
      if (resultCharMap[Object.keys(resultCharMap)[0]] < charMap[key]) {
        delete resultCharMap[Object.keys(resultCharMap)[0]];
        resultCharMap[key] = charMap[key];
      }
    } else {
      resultCharMap[key] = charMap[key];
    }
  }

  return Object.keys(resultCharMap)[0];
  */

  // Solution 2: This came while refactoring. Better than the previous implementation.
  
  Object.keys(charMap).forEach(key => {
    if (charMap[key] > maxCharCount) {
      maxCharCount = charMap[key];
      maxCharStr = key;
    }
  });

  return maxCharStr;
}

console.log(maxChar("abcccccd"));
console.log(maxChar("apple 123111111"));

/*
  Related Questions:

  - Does stringA have the same characters as stringB (is it an anagram)?

  - Does the given string have any repeated characters in it?
*/