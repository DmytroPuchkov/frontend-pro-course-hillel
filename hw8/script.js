// Заповнити масив А випадковими числами (діапазон на ваш розсуд). 
// Замінити кожен елемент масиву з непарним індексом на нуль.

const arr = [];
const min = 1;
const max = 15;

for (let i = 0; i < max; i++) {
  arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
  
  if (i % 2 !== 0) {
    arr[i] = 0;
  }
}

console.log(arr);

