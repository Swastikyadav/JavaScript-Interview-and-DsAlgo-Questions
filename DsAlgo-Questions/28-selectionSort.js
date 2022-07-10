/*
  Sort the given array using selection sort.
*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i; // Assuming that i has the least value.

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== 1) {
      [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
    }
  }

  return arr;
}