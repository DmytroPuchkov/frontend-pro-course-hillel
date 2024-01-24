// Задача - 1
console.log('%cЗадача - 1: числа у зворотньому порядку', 'color: yellow; background-color: blue;');

function row(n) {
  if (n > 0) {
    console.log(n);
    return row(n - 1);
  }
}

row(5);

// Задача - 2
console.log('%cЗадача - 2: сума елементів масиву', 'color: yellow; background-color: blue;');

function sumToArray(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumToArray(arr.slice(1))
  }
}

console.log(sumToArray([1, 2, 3, 4]));

// Задача - 3
console.log('%cЗадача - 3: факторіал числа, класика :)', 'color: yellow; background-color: blue;');

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(4));