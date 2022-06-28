/*
--Problem:

Given a string, return a new string with the reversed order of characters

-- Examples
reverse("apple") === "leppa"
reverse("laptop") === "potpal"
reverse("Greetings") === "sgniteerG"
*/

// --Solution 1: Using Array.prototype.reverse()
function reverse(str) {
  return str.split("").reverse().join("");

  // String --> Array
  // Reverse elements within array
  // back to string from array
}

// --Solution 2: Using for loop
function reverse2(str) {
  let resultStr = "";

  // Loop backwards and add each char to resultStr.
  for(let i = str.length - 1; i >= 0; i--) {
    resultStr += str[i];
  }

  return resultStr;
}

// --Solution 3: Using Array.prototype.reduce()
function reverse3(str) {
  // Turn string into array then reduce it to reversed string.
  return str.split("").reduce((reversed, char) => {
    return char + reversed;
  }, "");
}

console.log(reverse("apple"));
console.log(reverse2("laptop"));
console.log(reverse3("Greetings"));