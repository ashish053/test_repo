function signOfProduct(nums) {
  // Count the number of negative elements in the array.
  let numNegativeElements = 0;
  for (const num of nums) {
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
