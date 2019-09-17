function londonCityHacker(journey) {
  let cost = 0;

  for (let i = 0; i < journey.length; i++) {
    if (typeof journey[i] == "number") {
      if (typeof journey[i + 1] == "number") {
        i++;
      }
      cost += 1.5;
    }

    if (typeof journey[i] == "string") {
      cost += 2.4;
    }
  }
  return "£" + cost.toFixed(2);
}
