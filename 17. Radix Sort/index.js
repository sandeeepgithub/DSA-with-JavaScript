function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// console.log(getDigit(7854, 3));

function digitCount(num) {
  if (num === 0) {
    return 1;
  }

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr = []) {
  let val = 1;

  for (let i of arr) {
    let count = digitCount(i);
    val = Math.max(val, count);
  }
  return val;
}

function radixSort(arr = []) {
  let maxDigitCount = mostDigits(arr);

  for (let k = 0; k < maxDigitCount; k++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      buckets[digit].push(arr[i]);
    }
    arr = [].concat(...buckets);
  }

  return arr;
}

console.log(radixSort([4, 26, 358, 4512, 78749]));
