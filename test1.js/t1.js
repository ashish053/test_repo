// let a = function (object) {
//   let count = 0;
//   for (let i of object) {
//     if (i < 0) {
//       count++;
//     } else if (i == 0) {
//       console.log("0");
//       //   break;
//       if (count !== 0 && count % 2 == 0) {
//         console.log("1");
//       } else {
//         console.log("-1");
//       }
//     }
//   }
// };
// a([-2, -3, -5, -4]);
// a([1, 2, 0])

function signOfProduct(num) {
  // Count the number of negative elements in the array.
  let numNegativeElements = 0;
  //   for (const num of nums) {
  for (let i = 0; i < num.length; i++) {
    if (num < 0) {
      numNegativeElements++;
    }

    // If we encounter a 0, the product is 0.
    if (num === 0) {
      return 0;
    }
  }

  // If the number of negative elements is odd, the product is negative.
  return numNegativeElements % 2 === 1 ? -1 : 1;
}

console.log(signOfProduct([-2, -3, -5, 4]));
