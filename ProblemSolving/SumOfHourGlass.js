function hourglassSum(arr) {
  /**Given a 6x6 2D Array, arr:
   * An hourglass in A is a subset of values with indices falling in this pattern 
   * in arr's graphical representation:
   */

  let max = -63;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum = arr[i + 1][j + 1];
      for (let k = 0; k < 3; k++) {
        sum += arr[i][j + k];
        sum += arr[i + 2][j + k];
      }
      if (sum > max) max = sum;
    }
  }

  return max;
}
