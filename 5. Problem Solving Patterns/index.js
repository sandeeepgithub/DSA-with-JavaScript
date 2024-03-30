// ===================== 3. Frequency Counter Pattern =====================

let arr1 = [1, 2, 3];
let arr2 = [4, 1, 9];

const func = () => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let isTrue = true;

  for (let i = 0; i < arr1.length; i++) {
    let el = arr1[i];

    if (!arr2.includes(el * el)) {
      isTrue = false;
      break;
    }
  }

  return isTrue;
};

// console.log(func());

// optimized soln
const optimized = () => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (let i of arr1) {
    obj1[i] = (obj1[i] || 0) + 1;
  }

  for (let i of arr2) {
    obj2[i] = (obj2[i] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(key ** 2 in obj2)) {
      return false;
    }

    if (obj2[key ** 2] !== obj1[key]) {
      return false;
    }
  }

  return true;
};

// console.log(optimized());

// ===================== 4. Frequency Counter Anagram Challenge =====================

const anagram = (str1 = "", str2 = "") => {
  if (str1.length !== str2.length) {
    return false;
  }

  for (let i of str1) {
    if (!str2.includes(i)) {
      return false;
    }

    let el = str2.indexOf(i);
    str2 = str2.slice(0, el) + str2.slice(el + 1);
  }

  return true;
};

const optimizedAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (let i of str1) {
    obj1[i] = (obj1[i] || 0) + 1;
  }
  for (let i of str2) {
    obj2[i] = (obj2[i] || 0) + 1;
  }

  for (let i in obj1) {
    if (obj1[i] !== obj2[i]) {
      return false;
    }
  }
  return true;
};

// Author soln
function validAnagramAuthor(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
}

// console.log(anagram("nurse", "uresn"));
// console.log(anagram(" ", " "));
// console.log(anagram("nn", "nz"));
// console.log(anagram("aaz", "zza"));
// console.log(anagram("rat", "car"));
// console.log("=====================");
// console.log(optimizedAnagram("nurse", "uresn"));
// console.log(optimizedAnagram(" ", " "));
// console.log(optimizedAnagram("nn", "nz"));
// console.log(optimizedAnagram("aaz", "zza"));
// console.log(optimizedAnagram("rat", "car"));

// ===================== 7. Multiple Pointers Pattern =====================

const sorted = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
const sorted2 = [-1, 0, 2, 3];

const sumZero = (arr = []) => {
  let val = 0;

  sorted.map((el) => {
    sorted.map((ele) => {
      if (el + ele === 0) {
        val = [el, ele];
        return;
      }
    });
  });

  return val;
};

// console.log(sumZero(sorted));

// Author soln

const sumZeroAuthor = (arr = []) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
};

// console.log(sumZeroAuthor(sorted));
// console.log(sumZeroAuthor(sorted2));

// ===================== 8. Multiple Pointers Count Unique Values Challenge =====================

const newArr = [1, 1, 2, 3, 4, 5, 5];

const arrFunc = (arr = []) => {
  let uniqueVals = [];

  arr.forEach((el) => {
    if (!uniqueVals.includes(el)) {
      uniqueVals.push(el);
    }
  });

  return uniqueVals;
};

// console.log(arrFunc(newArr));

const optimizedArrFunc = (arr = []) => {
  let obj = {};
  let count = 0;

  for (let i of arr) {
    if (!(i in obj)) {
      obj[i] = i;
      count++;
    }
  }

  return count;
};

// console.log(optimizedArrFunc(newArr));

const authorSoln3 = (arr = []) => {
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
};

// console.log(authorSoln3(newArr));

// ===================== 11. Sliding Window Pattern =====================

const slideArr = [1, 1, 2, 3, 9, 4, 2, 5, 7, 8];

const slideFunction = (arr = [], val = 0) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let calc = arr[i];

    for (let j = 1; j < val; j++) {
      calc += arr[j + i];
    }

    if (calc > sum) {
      sum = calc;
    }
  }

  return sum;
};

console.log(slideFunction(slideArr, 3));

const authorSoln4 = (arr = [], val = 0) => {
  let temp = 0;
  let max = 0;

  for (let i = 0; i < val; i++) {
    temp += arr[i];
  }

  max = temp;

  for (let i = val; i < arr.length; i++) {
    temp = max + arr[i] - arr[i - val];

    if (temp > max) {
      max = temp;
    }
  }

  return max;
};

// const slideArr = [1, 1, 2, 3, 9, 4, 2, 5, 7, 8];

console.log(authorSoln4(slideArr, 3));
