function selectionSort(arr = []) {
  for (var i = 0; i < arr.length; i++) {
    var min = i;

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    console.log(arr);

    if (i !== min) {
      //SWAP!
      var temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([2, 4, 3, 1, 5]));
