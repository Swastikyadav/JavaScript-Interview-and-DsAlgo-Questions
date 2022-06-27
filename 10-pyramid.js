/*
  Write a function that accepts a positive number N.
  The function should console log a pyramid shape with N levels using the # character. Make sure that pyramids has spaces on both the left and right hand sides.

  --Examples
  
  pyramid(1)
  "#"

  pyramid(2)
  " # "
  "###"

  pyramid(3)
  "  #  "
  " ### "
  "#####"

  pyramid(4)
  "   #   "
  "  ###  "
  " ##### "
  "#######"
*/

// Solution 1: Iterative Solution
function pyramid(n) {
  const columnLength = n + (n - 1);
  const midPoint = Math.floor(columnLength / 2);

  for (let row = 0; row < n; row++) {
    let level = "";

    for (let col = 0; col < columnLength; col++) {
      if ((midPoint - row) <= col && (midPoint + row) >= col) {
        level += "#";
      } else {
        level += " ";
      }
    }

    console.log(level);
  }
}

/*
  1. Loop from 0 to n to create rows.
  2. Create an empty string variable "level" inside the first loop.
  3. Loop from 0 to (n + (n - 1)) to create columns.
  4. if ((midPoint - row) <= col && (midPoint + row) >= col)
    4.a. Add "#" to the level string.
  5. Else add " " to the level string.
  6. Console level string outside of inner loop but inside of outer loop.
*/

// Solution 2: Recursive solution
function recursivePyramid(n, row = 0, level = "") {
  const columnLength = n + (n - 1);
  const midPoint = Math.floor(columnLength / 2);

  if (n === row) {
    // End of the row, end of the recursion.
    return;
  }

  if (columnLength === level.length) {
    // End of the column
    console.log(level);
    recursivePyramid(n, row + 1); // At every column end, pattern string is again set to default empty string.
    return;
  }

  const addToLevel = (
    (midPoint - row) <= level.length&& (midPoint + row) >= level.length
  ) ? "#" : " ";

  recursivePyramid(n, row, level + addToLevel);
}

// console.log(pyramid(1));
// console.log(pyramid(2));
// console.log(pyramid(3));
// console.log(pyramid(4));

console.log(recursivePyramid(1));
console.log(recursivePyramid(2));
console.log(recursivePyramid(3));
console.log(recursivePyramid(4));