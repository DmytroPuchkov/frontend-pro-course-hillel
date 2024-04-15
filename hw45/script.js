function createArray() {
  const arr = [];

  for (let i = 1; i <= 100; i++) {
    arr.push(i);
  }

  return arr;
}

function createTable(container) {
  const numbers = createArray();
  const table = document.createElement('div');

  console.log(table);
  
  table.classList.add(container);

  const rows = numbers.map((number) => {
    const div = document.createElement('div');

    div.textContent = number;
    div.classList.add('element');
    
    return div;
  });

  table.append(...rows);
  document.body.prepend(table);
}

createTable('table');