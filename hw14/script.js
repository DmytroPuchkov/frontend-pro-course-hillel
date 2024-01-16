const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
  if (array.includes(item)) {
    array.splice(item - 1, 1);
  }

  return array;
};

removeElement(array, 5);

console.log(array);

