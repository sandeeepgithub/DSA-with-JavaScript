// ===================== 4. productOfArray =====================

function productOfArray(arr = []) {
  if (arr.length === 0) {
    return 1;
  }

  return arr.pop() * productOfArray(arr);
}

// console.log(productOfArray([1, 2, 3, 4, 5]));

// ===================== 5. recursiveRange =====================

function recursiveRange(num) {
  if (!num) {
    return 0;
  }

  return num + recursiveRange(--num);
}

// console.log(recursiveRange(4));

// ===================== 6. fib =====================

function fib(num) {
  if (num === 1 || num === 2) {
    return 1;
  }

  return fib(num - 1) + fib(num - 2);
}

console.log(fib(3));
