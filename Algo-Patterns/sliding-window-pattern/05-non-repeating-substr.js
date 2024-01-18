/*
Given a string, find the length of the longest substring which has no repeating characters.

Example 1:

Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".
Example 2:

Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".
Example 3:

Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".
*/

function non_repeat_substring(str) {
  let startWindow = 0;
  let maxLength = 0;
  let hashMap = {};

  for (let endWindow = 0; endWindow < str.length; endWindow++) {
    const rightChar = str[endWindow];
    if (hashMap[rightChar]) {
      maxLength = Math.max(maxLength, Object.keys(hashMap).length);

      startWindow = endWindow;
      hashMap = {};

      const leftChar = str[startWindow];
      hashMap[leftChar] = 1;
    } else {
      hashMap[rightChar] = 1;
    }
  }

  // console.log(hashMap, maxLength);
  return maxLength;
}

// console.log(non_repeat_substring("aabccbb"));
// console.log(non_repeat_substring("abbbb"));
// console.log(non_repeat_substring("abccde"));
console.log(non_repeat_substring("abcdaefghijkl"), "#0");

// -------- Alternate Solution ----------
// The above solution algo fails for last testcase. The 2 solutions below are correct.

// Solution 1
function noRepeatCharLen1(str) {
  let j = 0;
  let i = 0;
  const frequencyTracker = {};
  let longestSubStrLen = 0;

  while(j < str.length) {
      if (!frequencyTracker.hasOwnProperty(str[j])) {
          frequencyTracker[str[j]] = 1;
          longestSubStrLen = Math.max(longestSubStrLen, j - i + 1);
      } else {
          frequencyTracker[str[j]]++;
      }

      while(frequencyTracker[str[j]] > 1) {
          frequencyTracker[str[i]]--
          if (frequencyTracker[str[i]] === 0) {
              delete frequencyTracker[str[i]];
          }

          i++;
      }

      j++;
  };

  return longestSubStrLen;
}

// Solution #2
function noRepeatCharLen2(str) {
  let windowStart = 0,
      maxLength = 0,
      charIndexMap = {};

  for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];

      if (rightChar in charIndexMap) {
          windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
      }

      charIndexMap[rightChar] = windowEnd;

      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

console.log(noRepeatCharLen1("abcdaefghijkl"), "#1");
console.log(noRepeatCharLen2("abcdaefghijkl"), "#2");

// a b c d a e f g h i j k l

/*
Time Complexity #
The time complexity of the above algorithm will be O(N)O(N) where ‘N’ is the number of characters in the input string.

Space Complexity #
The space complexity of the algorithm will be O(K)O(K) where KK is the number of distinct characters in the input string. This also means K<=NK<=N, because in the worst case, the whole string might not have any repeating character so the entire string will be added to the HashMap. Having said that, since we can expect a fixed set of characters in the input string (e.g., 26 for English letters), we can say that the algorithm runs in fixed space O(1)O(1); in this case, we can use a fixed-size array instead of the HashMap.
*/