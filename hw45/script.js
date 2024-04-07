function createArray() {
  const arr = [];

  for (let i = 1; i <= 100; i++) {
    arr.push(i);
  }

  return arr;
}

function createTable(container) {
  const numbers = createArray();
  const table = document.querySelector(container);
  const fragment = document.createDocumentFragment();

  numbers.forEach((number) => {
    const div = document.createElement('div');

    div.textContent = number;
    div.style.width = '30px';
    div.style.height = '30px';
    div.style.padding = '4px';
    div.style.textAlign = 'center'
    div.style.color = 'red';
    div.style.backgroundColor = 'black';
    div.style.fontSize = '14px';

    fragment.append(div);
  });

  table.append(fragment);
}

createTable('.table');