// ===================== 2. reverse =====================

function reverse(str = "") {
  if (str.length === 0) {
    return;
  }

  return str
    .slice(str.length - 1)
    .concat(str.length - 1 > 0 ? reverse(str.slice(0, str.length - 1)) : "");
}

// console.log(reverse("awesome"));

// ===================== 3. isPalindrome =====================

function isPalindrome(str) {
  let reverse = function reverseStr(val) {
    if (val.length === 0) {
      return "";
    }

    return reverseStr(val.slice(1)) + val[0];
  };

  if (reverse(str) === str) {
    return true;
  }

  return false;
}

// console.log(isPalindrome("nan"));
