/*
  Print out the n-th entry in the fibonacci series.
  The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two.

  --Example
  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  First 10 entries of the fibonacci series.

  fib(4) -> 4th fibonacci number === 3
*/

// Solution 1: Iterative Solution (This is how I solved it in the first attempt)
function fib(n) {
  let fibNumberArray = Array.apply(null, Array(n + 1));
  let defaultFibArray = [0, 1];

  fibNumberArray.forEach((_, idx) => {
    if (idx === 0 || idx === 1) {
      fibNumberArray[idx] = idx;
      return;
    }

    const newNumberInseries = defaultFibArray.reduce((acc, cv) => acc + cv, 0);
    fibNumberArray[idx] = newNumberInseries;

    defaultFibArray[0] = defaultFibArray[1];
    defaultFibArray[1] = newNumberInseries;
  });

  return fibNumberArray[n];
}

// Solution 2: Recursive Solution
function recursiveFib(n) {
  if (n < 2) {
    return n;
  }

  return recursiveFib(n - 1) + recursiveFib(n - 2);
}

console.log(recursiveFib(4));
console.log(recursiveFib(11));
console.log(fib(52));