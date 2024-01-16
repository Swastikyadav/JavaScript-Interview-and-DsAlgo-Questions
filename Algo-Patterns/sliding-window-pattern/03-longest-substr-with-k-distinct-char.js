/*
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".
Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
*/

const longest_substring_with_k_distinct = function(str, k) {
  let hashMap = {};
  let maxLength = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    // keep expanding the window from right.
    const rightChar = str[windowEnd];
    if (hashMap[rightChar]) {
      hashMap[rightChar]++;
    } else {
      hashMap[rightChar] = 1;
    }

    // keep shrinking the window from left while distinctCharCount is > k
    while (Object.keys(hashMap).length > k) {
      const leftChar = str[windowStart];

      hashMap[leftChar] -= 1;
      if (hashMap[leftChar] === 0) {
        delete hashMap[leftChar];
      }

      windowStart += 1; // shrink the window.
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

console.log(longest_substring_with_k_distinct("araaci", 2));
console.log(longest_substring_with_k_distinct("araaci", 1));
console.log(longest_substring_with_k_distinct("cbbebi", 3));

// --------- Alternate Solution using while loop the overall concept is same. ------------

function longest_substring_with_k_distinct_01(str, k) {
  let j = 0;
  let i = 0;
  const hashMap = {};
  let longestLength = 0;

  while(j < str.length) {
      if (hashMap.hasOwnProperty(str[j])) {
          hashMap[str[j]]++;
      } else {
          hashMap[str[j]] = 1;
      }

      j++;

      while(Object.keys(hashMap).length > k) {
          hashMap[str[i]]--;
          if (hashMap[str[i]] === 0) {
              delete hashMap[str[i]];
          }

          i++;
      };

      longestLength = Math.max(longestLength, j - i); // Not addding "+1" because I incremented j (j++) before inner while loop. If you increment j (j++) after inner while loop caclulate longestLength like this: `Math.max(longestLength, j - i + 1)`.
  };

  return longestLength;
};


/*
Time Complexity #
The time complexity of the above algorithm will be O(N)O(N) where ‘N’ is the number of characters in the input string. The outer for loop runs for all characters and the inner while loop processes each character only once, therefore the time complexity of the algorithm will be O(N+N)O(N+N) which is asymptotically equivalent to O(N)O(N).

Space Complexity #
The space complexity of the algorithm is O(K)O(K), as we will be storing a maximum of ‘K+1’ characters in the HashMap.
*/