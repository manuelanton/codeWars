function findOdd(arr) {
  let objCounter = {};
  arr.map(number => {
    if (!objCounter[number]) objCounter[number] = 1;
    else objCounter[number]++;
  });
  for (key in objCounter) {
    let retNum = parseInt(key);
    if (objCounter[key] % 2 !== 0) return retNum;
  }
}
