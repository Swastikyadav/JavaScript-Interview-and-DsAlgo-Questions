/*
  Write a program that console logs the numbers from 1 to n. But fom multiples of three print "fizz" instead of the number and for multiples of 5 print "buzz".

  For numbers which are multiples of both three and five print "fizzbuzz".

  --Example

  fizzbuzz(5) // 1, 2, fizz, 4, buzz
*/

function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }

  return "";
}

// Make sure to first check for both multiples of 3 and 5 (multiple of 3 && multiple of 5). Else The program will print invlaid sequence.

// Say for example the number is 15, if you check for multiple of 3 first, it will print "fizz" where it should print "fizzbuzz".

console.log(fizzbuzz(5));
console.log(fizzbuzz(25));