let bc = function (a) {
  let arr = [];
  for (let i = 2; i < a; i++) {
    let isPrime = true;
    for (let b = 2; b < i; b++) {
      if (i % b === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      arr.push(i);
    }
  }
  console.log(arr);
};

bc(20);
