// ===================== 3. Intro to Linear Search =====================

const searchArr = (arr = [], val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
};

// console.log(searchArr([1, 2, 3, 4], 5));

// ===================== 7. Intro to Binary Search =====================

const searchBinaryArr = (arr = [], val) => {
  let arr1 = arr.slice(0, Math.floor(arr.length / 2));
  let arr2 = arr.slice(Math.floor(arr.length / 2));

  if (arr.length === 0) {
    return false;
  }

  if (val === arr1[0]) {
    return true;
  }

  if (val >= arr1[arr1.length - 1]) {
    if (val === arr1[arr1.length - 1]) {
      return true;
    }
    return searchBinaryArr(arr2, val);
  } else if (val <= arr1[0]) {
    if (val === arr1[0]) {
      return true;
    }
    return searchBinaryArr(arr1, val);
  } else {
    return false;
  }
};

const authorSoln = (arr = [], elem = 0) => {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
};

// console.log(searchBinaryArr([1, 2, 3, 4, 5, 6, 7], 0));

// ===================== 13. Naive String Search Implementation =====================

function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }

      if (j === short.length - 1) {
        count++;
      }
    }
  }

  return count;
}

console.log(naiveSearch("lorie loled", "lol"));
