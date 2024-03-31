// ===================== 4. The Call Stack =====================

function takeShower() {
  return "Showering!";
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
}
function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work!");
}

// wakeUp();

// ===================== 8. Writing Factorial Iteratively =====================

function factorial(num) {
  if (num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

// console.log(factorial(4));

// ===================== 11. Helper Method Recursion =====================

const helperFunction = (val = 0) => {
  let result = [];

  function helper(num) {
    if (num === 0) {
      return;
    }

    if (num % 2 !== 0) {
      result.push(num);
    }

    num = num - 1;
    helper(num);
  }

  helper(val);
  return result;
};

console.log(helperFunction(10));
