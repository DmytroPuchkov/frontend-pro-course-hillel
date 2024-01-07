const arrA = [];
const min = 1;
const max = 25;
let n;

while (n <= 0 || isNaN(n)) {
  n = parseInt(prompt('Введіть розмір масиву', ''));
}

for (let i = 0; i < n; i++) {
  arrA[i] = Math.floor(Math.random() * (max - min + 1) + min);
}

function sortArray(a, b) {
  return (a - b);
}

arrA.sort(sortArray);

const arrB = arrA.slice(1, n - 1);

console.log('Масив A:', arrA);
console.log('Мінімальне число в масиві A:', arrA[0]);
console.log('Максимальне число в масиві A:', arrA.at(-1));
console.log(`Масив B (числа між ${arrA[0]} та ${arrA.at(-1)}):`, arrB);