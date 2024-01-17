const array = [1, 2, 3, 4, 5, 5, 6, 7, 5];

function removeElement(array, item) {
  for (let i = 0; i < array.length; i++) {
    const index = array.indexOf(item);

    if (index !== -1) {
      array.splice(index, 1);
      i--;
    }
  }

  return array;
};

removeElement(array, 5);

console.log(array);