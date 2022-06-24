/*
  Given an integer, return an integer that is the reverse ordering of numbers.

  Both input and output should be string.

  --Examples

  reverseInt(15) === 51
  reverseInt(981) === 189
  reverseInt(500) === 5
  reverseInt(-15) === -51
  reverseInt(-90) === -9
*/

function reverseInt(n) {
  const nStr = Math.abs(n).toString();
  const reversedStr = nStr.split("").reverse().join("");

  // return n > 0 ? +reversedStr : +reversedStr * -1;
  return +reversedStr * Math.sign(n);

  // Use Math.abs to get positive inter and turn it to a string.
  // Reverse the string.
  // Return negative integer if n < 0 else return positive integer.
}

console.log(reverseInt(15));
console.log(reverseInt(981));
console.log(reverseInt(500));
console.log(reverseInt(-15));
console.log(reverseInt(-90));