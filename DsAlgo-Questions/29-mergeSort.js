/*
  Sort a given array using MergeSort.
*/

// This algo uses two different functions and recursion.

// Merge two sorted array into a new sorted array.
function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  // By this time, either left or right is an empty array.
  return [...results, ...left, ...right];
}

// Divide an array into pairs (recursively) and use the above merge function to get a new sorted array. (Divide and conquer)
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let midPoint = Math.floor(arr.length / 2);
  let leftArray = mergeSort(arr.slice(0, midPoint));
  let rightArray = mergeSort(arr.slice(midPoint));

  return merge(leftArray, rightArray);
}

console.log(mergeSort([6, 3, 60, 0, 40, -40]));

/*
  Time Complexity of Merge Sort Algorithm
  Let's try to calculate time complexity of merge sort algorithm. So, taking our previous example ([6, 3, 5, 2]), it took 2 steps to divide it into multiple single element array.

  **

  It took 2 steps to divide an array of length 4 - (2^2)

  **.

  Now if we double the length of array (8), it will take 3 steps to divide - (2^3). Means doubling the array length didn't doubled the steps.

  Hence time complexity of merge sort algorithm is Logarithmic Time Complexity O(log n).
*/