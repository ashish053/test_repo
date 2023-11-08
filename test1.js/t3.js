function getSign(arr, N) {
  // Intialize product P by 1
  let flag = 1;

  // Iterate in array arr[]
  for (let i = 0; i < N; i++) {
    if (arr[i] === 0) return 0;
    if (arr[i] < 0) flag = -flag;
  }

  // Return flag
  return flag;
}

// Test case
const N = 7;
const arr = [-1, -2, -3, -4, 3, 2, 1];

const ans = getSign(arr, N);
if (ans > 0) console.log("Sign of product is +ve");
else if (ans < 0) console.log("Sign of product is -ve");
else console.log("NO sign");
