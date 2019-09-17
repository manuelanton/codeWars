function persistence(n) {
  let nArr = ("" + n).split("");
  let count = 0;
  let prod = 1;
  while (nArr.length > 1) {
    for (let i = 0; i < nArr.length; i++) {
      prod *= nArr[i];
    }
    nArr = ("" + prod).split("");
    prod = 1;
    count++;
  }
  return count;
}
