// let a = function (arr1, arr2) {
//   let com = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let i = 0; i < arr2.length; i++) {
//       if (arr1[i] === arr2[i]) {
//         com.push(arr1[i]);
//       }
//     }
//   }
//   console.log(com);
// };
// a([1, 2, 2, 3, 4, 5], [2, 3, 3, 6]);

let a = function (a1, a2) {
  let arr1 = [...new Set(a1)];
  let arr2 = [...new Set(a2)];
  let com = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        // Use === for comparison
        com.push(arr1[i]);
      }
    }
  }
  console.log(com);
};

a([1, 2, 2, 3, 4, 5], [2, 3, 3, 6]);
