/*
Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

Example 1:

Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
Example 2:

Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".
Example 3:

Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
*/

function length_of_longest_substring(str, k) {
  let windowStart = 0;
  let maxLength = 0;
  let maxRepeatingLetters = 0;
  const hashMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const right = str[windowEnd];
    if (hashMap[right]) {
      hashMap[right]++;
    } else {
      hashMap[right] = 1;
    }

    maxRepeatingLetters = Math.max(maxRepeatingLetters, hashMap[right]);

    if (((windowEnd - windowStart + 1) - maxRepeatingLetters) > k) {
      const left = str[windowStart];
      hashMap[left] -= 1;
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    // console.log(hashMap, maxLength, maxRepeatingLetters);
  }

  return maxLength;
}

// ------------------ Alternate Solution following same patter --------------
function maxRepeatChar(str, k) {
  let i = 0;
  let j = 0;
  let maxLength = 0;
  let maxRepeatCharCount = 0;
  const freqMap = {};

  while(j < str.length) {
      if (str[j] in freqMap) {
          freqMap[str[j]]++;
          maxRepeatCharCount = Math.max(maxRepeatCharCount, freqMap[str[j]]);
      } else {
          freqMap[str[j]] = 1;
      }

      while((j - i + 1 - maxRepeatCharCount) > k) {
          freqMap[str[i]]--;
          i++;
      }

      maxLength = Math.max(maxLength, j - i + 1);

      j++;
  };

  return maxLength;
};

console.log(length_of_longest_substring("aabccbb", 2));
console.log(length_of_longest_substring("abbcb", 1));
console.log(length_of_longest_substring("abccde", 1));

/*
Time Complexity #
The time complexity of the above algorithm will be O(N)O(N) where ‘N’ is the number of letters in the input string.

Space Complexity #
As we are expecting only the lower case letters in the input string, we can conclude that the space complexity will be O(26)O(26), to store each letter’s frequency in the HashMap, which is asymptotically equal to O(1)O(1).
*/