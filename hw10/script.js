const arr = [];
const min = 1;
const max = 25;
let n;

while (n <= 0 || isNaN(n)) {
  n = parseInt(prompt('Введіть розмір масиву', ''));
}

for (let i = 0; i < n; i++) {
  arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
}

function sortArray(a, b) {
  return (a - b);
}

arr.sort(sortArray);

const arr2 = arr.slice(1, n - 1);

console.log('Масив A:', arr);
console.log('Мінімальне число в масиві A:', arr[0]);
console.log('Максимальне число в масиві A:', arr.at(-1));
console.log(`Масив B (числа між ${arr[0]} та ${arr.at(-1)}):`, arr2);