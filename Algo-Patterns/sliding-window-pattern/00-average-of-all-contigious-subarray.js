// Find the average of all contiguous subarrays of size ‘5’ in the given array.

function averageOfSubarraySizek(arr, k) {
  let i = 0;
  let j = k - 1;
  let result = [];
  let subArraySum = arr.slice(i, j + 1).reduce((acc, cv) => acc + cv);

  while (j + 1 <= arr.length) {
    subArrAverage = subArraySum / k;
    result.push(subArrAverage);

    subArraySum -= arr[i];
    i++;
    j++;
    subArraySum += arr[j];
  }

  return result;
}

console.log(averageOfSubarraySizek([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));