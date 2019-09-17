function kebabize(str) {
  let arr = str.split(""),
    answArr = [];
  arr.forEach(function(char, i) {
    if (char === char.toUpperCase() && isNaN(char)) {
    i===0? "":answArr.push("-");
      answArr.push(char.toLowerCase());
    }
    if (char === char.toLowerCase() && isNaN(char)) {
      answArr.push(char);
    }
  });
  answArr.forEach(() => {});

  return answArr.join("");
}
kebabize("myCamelCasedString");
