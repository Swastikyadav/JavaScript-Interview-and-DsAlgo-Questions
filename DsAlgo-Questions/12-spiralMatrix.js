/*
  Write a function that accepts an integer N and returns a NxN spiral matrix.

  --Examples

  matrix(2)
    [[1, 2],
    [4, 3]]

  matrix(3)
    [[1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]]

  matrix(4)
    [
      [01, 02, 03, 04],
      [12, 13, 14, 05],
      [11, 16, 15, 06]
      [10, 09, 08, 07]
    ]

  SpiralMatrix - Read the matrix numbers in sequence and you will see the spiral.
*/

function matrix(n) {
  const resultMatrix = [];

  for (let i = 0; i < n; i++) {
    resultMatrix.push([]);
  }

  let rowStart = 0;
  let rowEnd = n - 1;
  let columnStart = 0;
  let columnEnd = n - 1;
  
  let counter = 1;

  while (columnStart <= columnEnd && rowStart <= rowEnd) {
    // Tow Row
    for (let i = columnStart; i <= columnEnd; i++) {
      resultMatrix[rowStart][i] = counter;
      counter++;
    }
    rowStart++;
  
    // Right Column
    for (let i = rowStart; i <= rowEnd; i++) {
      resultMatrix[i][columnEnd] = counter;
      counter++;
    }
    columnEnd--;

    // Bottom Row
    for (let i = columnEnd; i >= columnStart; i--) {
      resultMatrix[rowEnd][i] = counter;
      counter++;
    }
    rowEnd--;

    // Start Column
    for (let i = rowEnd; i >= rowStart; i--) {
      resultMatrix[i][columnStart] = counter;
      counter++
    }
    columnStart++;
  }

  return resultMatrix;
}

// This one took me a while to grasp. And is really difficult to explain with text (This is really tough to understand without any visual aid). But I will try.

/*
  - Create empty array of arrays called resultMatrix.
  - Create a counter variable, starting at 1.
  - As long as (colStart <= colEnd) AND (rowStart <= rowEnd)
    - Loop from colStart to colEnd.
      - At resultMatrix[rowStart][i] assign counter variable.
      - Increment counter.
    - Increment rowStart.
    - Loop from rowStart to rowEnd.
      - At resultMatrix[i][colEnd] assign counter variable.
      - Increment counter.
    - Decrease end column
    - ...repeat for other two sides.
*/
// Damnit, even I don't know what I wrote there. 😬

console.log(matrix(2));
console.log(matrix(3));
console.log(matrix(4));