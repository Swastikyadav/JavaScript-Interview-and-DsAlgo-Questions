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

// Solution 2: Recursive Solution - This runs in exponential time complexity.
function recursiveFib(n) {
  if (n < 2) {
    return n;
  }

  return recursiveFib(n - 1) + recursiveFib(n - 2);
}

// Solution 3: Memoizing the recursive solution to improve the time complexity.

// Slow Fib Function ----> Memoizer ----> Fast Fib Function

function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

function memoFib(n) {
  if (n < 2) {
    return n;
  }

  return memoFib(n - 1) + memoFib(n - 2);
}

memoFib = memoize(memoFib);

console.log(fib(4));
console.log(recursiveFib(15));
console.log(memoFib(52));