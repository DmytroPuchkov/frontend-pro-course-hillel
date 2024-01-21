// Задача - 1
console.log('%cЗадача - 1', 'color: yellow; background-color: blue;');

const input = [1, 2, 3, 4, 5, 6];

function isEven(x) {
  return x % 2 == 0;
}

function filter(array, callback) {
  if (typeof callback !== "function") {
    return null;
  }

  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(filter(input, isEven));

// Задача - 2
console.log('%cЗадача - 2','color: yellow; background-color: blue;');

const list = [1, 2, 3, 4, 5, 6];

function copy(list, callback) {
  if (typeof callback !== "function") {
    return list.slice();
  } else {
    return list.map(callback);
  }
}

const newL = copy(list, (value) => value * 10);

console.log(newL);