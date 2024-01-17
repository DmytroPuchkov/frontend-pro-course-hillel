const array = [1, 2, 3, 4, 5, 5, 6, 7, 5];

function removeElement(array, item) {
  let index = array.indexOf(item);

  while (index !== -1) {
    array.splice(index, 1);
    index = array.indexOf(item);
  };

  return array;
}

removeElement(array, 5);

console.log(array);