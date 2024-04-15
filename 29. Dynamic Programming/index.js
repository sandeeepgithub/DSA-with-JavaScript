let obj = {};

function fib(n) {
  if (obj[n]) {
    return obj[n];
  }

  if (n <= 2) {
    obj[n] = 1;
    return 1;
  }

  let val = fib(n - 2) + fib(n - 1);
  obj[n] = val;

  return val;
}
