const arr = [];
let n;
let arrElement;

while (n <= 0 || isNaN(n)) {
  n = parseInt(prompt('Введіть розмір масиву', ''));
}

for (let i = 0; i < n; i++) {

  do {
    arrElement = prompt(`Введіть значення ${i}-го елементу масиву:`, '');
  } while (!arrElement || isNaN(arrElement) || arrElement < 0 || !arrElement.trim());
  
  arr.push(arrElement);
}

console.log(arr);