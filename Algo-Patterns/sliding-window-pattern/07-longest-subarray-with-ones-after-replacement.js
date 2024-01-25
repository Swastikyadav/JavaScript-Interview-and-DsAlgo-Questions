/*
Problem Statement #
Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

Example 1:
Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

Example 2:
Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.
*/

// My Solution:
function lengthOfLongestSubStr(arr, k) {
  let i = 0;
  let j = 0;
  let longestSubStr = 0;
  const windowNumFreq = [0, 0];

  while(j < arr.length) {
      if (arr[j] === 1) {
          windowNumFreq[1]++;
      } else {
          windowNumFreq[0]++;
      }

      // This while loop can be replaced just to one if statement.
      while(windowNumFreq[0] > k) {
          windowNumFreq[arr[i]]--;
          i++;
      }

      longestSubStr = Math.max(longestSubStr, j - i + 1);
      j++;
  }

  return longestSubStr;
}

console.log(lengthOfLongestSubStr([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
console.log(lengthOfLongestSubStr([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));

// Time and Space complexity
/*
The time complexity of the above alogrithm will be O(N) where "N" is the length of array.

The algo runs in constant space O(1).
*/