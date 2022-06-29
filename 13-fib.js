/*
  Print out the n-th entry in the fibonacci series.
  The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two.

  --Example
  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  First 10 entries of the fibonacci series.

  fib(4) -> 4th fibonacci number === 3
*/

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

console.log(fib(4));
console.log(fib(11));
console.log(fib(52));