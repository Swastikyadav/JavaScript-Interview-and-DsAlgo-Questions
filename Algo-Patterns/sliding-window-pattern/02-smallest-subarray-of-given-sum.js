/*
This problem follows the Sliding Window pattern and we can use a similar strategy as discussed in previous question. There is one difference though: in this problem, the size of the sliding window is not fixed. Here is how we will solve this problem:

Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

Examples:
Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
*/

function smallest_sub_array_with_given_sum(arr, s) {
  let start = 0;
  let windowSum = 0;
  let minLength = Infinity;

  for (let end = 0; end < arr.length; end++) {
    windowSum += arr[end];

    while(windowSum >= s) {
      minLength = Math.min(minLength, end - start + 1);
      windowSum -= arr[start];
      start++;
    }
  }

  return minLength;
}

console.log(smallest_sub_array_with_given_sum([2, 1, 5, 2, 3, 2], 7));
console.log(smallest_sub_array_with_given_sum([2, 1, 5, 2, 8], 7));
console.log(smallest_sub_array_with_given_sum([3, 4, 1, 1, 6], 8));

