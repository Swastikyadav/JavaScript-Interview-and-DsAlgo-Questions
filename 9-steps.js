/*
  Write a function that accepts a positive number N.
  The function should console log a step shape with N levels using the # character.

  Make sure the step has spaces on the right hand side!

  --Examples

  steps(2)
    "# "
    "##"

  steps(3)
    "#  "
    "## "
    "###"

  steps(4)
    "#   "
    "##  "
    "### "
    "####"
*/

// Solution 1: Iterative Solution with escaping the string at new line (\n)
function steps(n) {
  let resultPattern = "";

  for (let i = 1; i <= n; i++) {
    if (resultPattern) {
      resultPattern += `\n${"#".repeat(i)}${" ".repeat(n-i)}`;
    } else {
      resultPattern += `${"#".repeat(i)}${" ".repeat(n-i)}`;
    }
  }

  return resultPattern;
}

// Solution 2: Iterative solution with nested loops.
function steps2(n) {
  // i => Row
  // j => Column
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= n; j++) {
      if (i >= j) {
        pattern += "#";
      } else {
        pattern += " ";
      }
    }

    console.log(pattern);
  }
}

// Solution 3: Recursive Solution
function recursiveSteps(n) {

}

/*
  - The first thing to figure out in recursion is a base case.
  - Base case is the situation where we stop the resursion.
  - Give reasonable defaults to the bare minimum pieces of info.
  - Check the base case. Is there any work left to do? If not, return.
  - Do some work. Call your function again, making sure the arguments have changed in some fashion.
*/

console.log(steps2(2));
console.log("------");
console.log(steps2(3));
console.log("------");
console.log(steps2(4));