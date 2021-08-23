const middle = (array) => {
  const middleArray = [];

  if (array.length < 3) {
    return false;
  }
  
  const length = array.length;
  const midpoint = length / 2;

  if (length % 2 === 0) {
    middleArray.push(array[midpoint - 1], array[midpoint]);
  } else {
    middleArray.push(array[parseInt(midpoint)]);
  }

  return middleArray;
};

module.exports = middle;