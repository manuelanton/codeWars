function solution(number) {
  var retArr = [];
  while (number > 0) {
    number--;
    if (number % 5 == 0 || number % 3 == 0) retArr.push(number);
  }
  return retArr.reduce((a, b) => a + b, 0);
}
