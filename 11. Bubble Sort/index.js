function sortArray(arr = []) {
  if (arr.length === 0) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let a = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = a;
      }
    }
  }

  return arr;
}

function authorOptimized(arr = []) {
  let noSwaps = false;

  for (let i = arr.length; i > 0; i++) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let a = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = a;
        noSwaps = true;
      }

      if (!noSwaps) {
        break;
      }
    }
  }

  return arr;
}

console.log(sortArray([5, 4, 2, 3, 2, 1, 6, 4]));
