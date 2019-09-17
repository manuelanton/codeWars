// non-array version, doesn't pass all the tests

function tickets(peopleInLine) {
  var cash = [];
  for (const person of peopleInLine) {
    if (
      person === 25 ||
      (person === 50 && cash >= 25) ||
      (person === 100 && cash >= 75)
    ) {
      cash.push(person);
    } else return "NO";
  }
  return "YES";
}

// array version, should work?

function tickets(peopleInLine) {
  var cash = [];
  for (person in peopleInLine) {
    if (person == 25) {
      cash.push(person);
    } else if (person == 50) {
      let index = cash.indexOf(25);
      if (index > -1) {
        cash.splice(index);
        cash.push(person);
      }
    } else if (person == 100) {
      let index50 = cash.indexOf(50);
      let index25 = cash.indexOf(25);
      let index25bis = cash.lastIndexOf(25);
      if (index50 > -1 && index25 > -1) {
        cash.splice(index50, index50 + 1);
        let index25 = cash.indexOf(25);
        cash.splice(index25, index25 + 1);
        cash.push(person);
      } else if (index25 > -1 && index25bis > -1) {
        cash.splice(index25, index25 + 1);
        let index25bis = cash.indexOf(25);
        cash.splice(index25bis, index25bis - 1);
        cash.push(person);
      }
    } else return "NO";
  }
  return "YES";
}

// array v2

function tickets(peopleInLine) {
  let register = [0, 0];
  // where r[0] = $25; r[1] = $50;

  for (let i = 0; i < peopleInLine.length; i++) {
    switch (peopleInLine[i]) {
      case 25:
        register[0]++;
        break;

      case 50:
        register[0]--;
        register[1]++;
        break;

      case 100:
        register[1] ? register[1]-- : (register[0] -= 2);
        register[0]--;
        break;
    }

    if (register[0] < 0) {
      return "NO";
    }
  }
  return "YES";
}
