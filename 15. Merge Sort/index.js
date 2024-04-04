// const arr1 = [1, 4, 6, 10];

// const arr2 = [2, 3, 5, 7];

const mergeArray = (arr1 = [], arr2 = []) => {
  let results = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
};

const sortArray = (arr = []) => {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = sortArray(arr.slice(0, mid));
  let right = sortArray(arr.slice(mid));

  return mergeArray(left, right);
};

console.log(sortArray([15, 1, 12, 8, 5, 6, 3, 4, 78]));
