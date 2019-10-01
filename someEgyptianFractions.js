function decompose(currNum, answArray = [], origNum = null) {
  if (origNum === null) {
    let [top, bot] = currNum.split("/");
    let flipped = "1/" + Math.ceil(bot / top);
    origNum = numberize(currNum);
    console.log(flipped);
    answArray.push(flipped);
    numberize(currNum);
    numberize(flipped);
    currNum = currNum - flipped;
    return decompose(currNum, origNum, answArray);
  }
  let holdMe = answArray;
  console.log(holdMe);
  holdMe.forEach(thing => numberize(thing));
  let answArraySum = holdMe.reduce((accum, valToSum) => accum + valToSum);
  if (answArraySum !== origNum) {
    let [top, bot] = currNum.split("/");
    let flipped = "1/" + Math.ceil(bot / top);
    answArray.push(flipped);
    numberize(currNum);
    numberize(flipped);
    currNum = currNum - flipped;
    return decompose(currNum, origNum, answArray);
  }
  return ansArray;
}

function numberize(fraction) {
  let [n, d] = fraction.split("/");
  return n / d;
}
