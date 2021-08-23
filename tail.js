const tail = (elements) => {
  let newArray = [];

  for (let i = 1; i < elements.length; i++) {
    newArray[i - 1] = elements[i];
  }

  return newArray;
};

module.exports = tail;