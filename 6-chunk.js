/*
  Given an array and chunk size, divide the array into many subarrays where each subarray is of length size.

  --Examples

  chunk([1, 2, 3, 4], 2) --> [[1, 2], [3, 4]]
  chunk([1, 2, 3, 4, 5], 2) --> [[1, 2], [3, 4], [5]]
  chunk([1, 2, 3, 4, 5], 10) --> [[1, 2, 3, 4, 5]]
*/

// Solution 1: Iterate through the original array and use an empty helper array.
function chunk(array, size) {
  const chunkedArray = [];

  array.forEach((item, idx) => {
    const lastChunkInChunkedArray = chunkedArray[chunkedArray.length - 1];

    if (!chunkedArray.length || lastChunkInChunkedArray.length === size) {
      chunkedArray.push([item]);
    } else {
      lastChunkInChunkedArray.push(item);
    }
  });

  return chunkedArray;
}

/*
  1. Create empty array to hold chunks called chunkedArray.
  2. For each element in the original array
    2.a. Retrieve the last element in chunkedArray.
    2.b. If last element does not exist, or its length is equal to chunk size.
      2.b.1. Push a new chunk into chunkedArray with the current element.
    2.c. Else add the current element into the chunk.
*/

// Solution 2: 

console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5], 10));