const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {

  // v1

  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] === item) {
  //     array.splice(i, 1);
  //   }
  // }

  // v2

  // const index = array.indexOf(item);
  // array.splice(index, 1);

  // v3

  if (array.includes(item)) {
    array.splice(item - 1, 1);
  }

  return array;
};

removeElement(array, 5);

console.log(array);