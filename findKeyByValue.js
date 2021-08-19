const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion ✅: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion ❌: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(catalog, show) {
  let genre = '';

  for (const key in catalog) {
    if (catalog[key] === show) {
      genre = key;
    } else {
      genre = undefined;
    }
  }
  return genre;
};

const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);