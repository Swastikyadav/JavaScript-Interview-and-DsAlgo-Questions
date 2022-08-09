// Sliding Window Pattern
// Calculating something with the contiguous subarray or sub list of a given size(k).
/*
  [7, 43, 4, 6, 8, 11, 2], k = 3
  [i     j] -> sliding window

  Every time we slide this window remove first element (7) from calculation and add next element (6) in the calculation and window.
*/

// Q. Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

function maximumSumSubArrayofK(arr, k) {
  let i = 0;
  let j = k - 1;
  let maxSum = 0;
  let currentWindowSum = arr.slice(i, j + 1).reduce((acc, cv) => acc + cv);


  while (j < arr.length) {
    if (currentWindowSum > maxSum) {
      maxSum = currentWindowSum;
    }

    currentWindowSum -= arr[i];
    i++;
    j++;
    currentWindowSum += arr[j];
  }

  return maxSum;
}

console.log(maximumSumSubArrayofK([7, 43, 4, 6, 8, 11, 2], 3));
console.log(maximumSumSubArrayofK([2, 1, 5, 1, 3, 2], 3));
console.log(maximumSumSubArrayofK([2, 3, 4, 1, 5], 2));

// Time Complexity - O(n)
// Space Complexity - O(1)