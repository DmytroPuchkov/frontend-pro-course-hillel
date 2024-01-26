function converter(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    
    if (Array.isArray(item)) {
      newArray = newArray.concat(converter(item));
    } else {
      newArray.push(item);
    }
  }

  return newArray;
}

const mass = [[1,2,3, [3.1]], 4, [5,6, [7, 8]]];
const result = converter(mass);

console.log(result);