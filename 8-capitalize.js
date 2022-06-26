/*
  Write a function that accepts a string. The function should capitalize the first letter of each word in the string then return the capitalized string.

  --Example

  capitalize("a short sentence"); -> "A Short Sentence"
  capitalize("a lazy fox"); -> "A Lazy Fox"
  capitalize("look, it is working!") -> "Look, It Is Working!"
*/

// Solution 1: Array.prototype.slice() method
function capitalize(str) {
  const capitalizedArr = str.split(" ").map(w => {
    // Call toUpperCase method on first char and concat with rest of the characters in the word.
    return w[0].toUpperCase() + w.slice(1);
  });

  return capitalizedArr.join(" ");
}

/*
  1. Split the input string by spaces to ger an array.
  2. Map over each element in the array.
    2.a. Uppercase the first letter of the word
    2.b. Join first letter with rest of the string
  3. Join the mapped array with spaces and return.
*/

// Solution 2: A pointer based solution
function capitalize2(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === " " || i === 0) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

/*
  1. Make an empty result string.
  2. Loop over the string.
  3. If the left to the current element is a space.
    3.a. Capitalize the element and concat to the result string.
  4. Else Capitalize the element and concat to the result string.
*/

console.log(capitalize("a short sentence"));
console.log(capitalize("a lazy fox"));
console.log(capitalize("look, it is working!"));

console.log(capitalize2("a short sentence"));
console.log(capitalize2("a lazy fox"));
console.log(capitalize2("look, it is working!"));