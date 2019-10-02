function array_diff(arr, delValArray) {
  return arr.filter(idxVal => !delValArray.includes(idxVal));
}
