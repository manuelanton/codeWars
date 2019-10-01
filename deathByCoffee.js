function decompose(n) {
  //var retArray;
  let [num, dem] = n.split("/");
  if (dem === undefined) {
    dem = 100;
    num *= 100;
  }
  console.log(num, dem);

  //return retArray.map(elem => elem.toString());
}
