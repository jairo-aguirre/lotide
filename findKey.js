const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion ✅: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion ❌: ${actual} !== ${expected}`);
  }
};

const findKey = (restaurants, callback) => {
  for (const restaurant in restaurants) {
    if (callback(restaurants[restaurant])) return restaurant;
    // console.log(restaurants[restaurant].stars);
  }
  return undefined;
};

// console.log(
assertEqual(
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
// );
, 'noma')