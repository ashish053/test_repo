let a = function (array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      count++;
    }
  }

  if (count == 0) {
    console.log("+++");
  }
  if (count == 1) {
    console.log("++-");
  }
  if (count == 2) {
    console.log("+--");
  }
  if (count == 3) {
    console.log("---");
  }
};
a([2, 3, 5, -4]);
