const n = 3;
const m = 3;
const sum = [];
let maxCol;
let minCol;

const arr = [];

for (let i = 0; i < n; i++) {
  arr[i] = new Array(m);

  for (let j = 0; j < m; j++) {
    arr[i][j] = Math.floor(Math.random() * 100 + 1);
  }
}

console.log('Масив:', arr);

for (let i = 0; i < n; i++) {
  let total = 0;

  for (let j = 0; j < m; j++) {
    total += arr[j][i];
  }

  sum.push(total);

  if (i === 0) {
    minCol = 0;
    maxCol = 0;
  }

  if (i === 0 || total < sum[minCol]) {
    minCol = i;
  }

  if (total > sum[maxCol]) {
    maxCol = i;
  }
};

console.log(`Сума стовпчиків:`, sum);
console.log(`Найменша сума в стовпчику з ${minCol}-м індексом:`, sum[minCol]);
console.log(`Найбільша сума в стовпчику з ${maxCol}-м індексом:`, sum[maxCol]);