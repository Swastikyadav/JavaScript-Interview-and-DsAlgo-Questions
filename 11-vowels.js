/*
  Write a function that returns the number of vowels used in a string. Vowels are the characters 'a', 'e', 'i', 'o', 'u'.

  --Examples

  vowels("Hi There!") --> 3
  vowels("Why do you ask?") --> 4
  vowels("Why?") --> 0
*/

// Solution 1: Iterative Solution
function vowels(str) {
  const vowelArray = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  for (let letter of str.toLowerCase()) {
    vowelArray.includes(letter) ? vowelCount++ : null;
  }

  return vowelCount;
}

// Solution 2: Regex
function vowelsRegex(str) {
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}

console.log(vowels("HI There!"));
console.log(vowelsRegex("Why do you ask?"));
console.log(vowels("Why?"));