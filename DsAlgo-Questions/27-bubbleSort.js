/*
  Sort a given array using bubbleSort.
*/

function bubbleSort(array) {
  let isSwapped;

  for(let i = array.length; i > 0; i--) {
    isSwapped = false;

    for(let j = 0; j < i - 1; j++) {
      if(array[j] > array[j + 1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
        isSwapped = true;
      }
    }

    if(!isSwapped) {
      break;
    }
  }

  return array;
}

console.log(bubbleSort([6, 3, 5, 2]));

// In bubble sort algo, we swap the larger number to the end by comparing each number with the previous number, until the array is sorted.

/*
  Time Complexity of Bubble Sort Algorithm

  There is a nested loop and both loop runs n times, so time complexity for this algo is (n * n) that is Quadratic Time Complexity O(n^2).
*/