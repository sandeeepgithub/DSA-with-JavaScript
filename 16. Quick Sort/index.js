function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function pivot(arr = [], start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr = [], left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    // left side
    quickSort(arr, left, pivotIndex - 1);

    // // right side
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

// console.log(pivot([3, 5, 8, 1, 2, 0]));
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
