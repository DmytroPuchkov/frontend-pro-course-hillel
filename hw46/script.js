const list = document.querySelector('.list');
const button = document.querySelector('.button');
const array = [1, 2, [1.1, 1.2, 1.3], 3];

function generateList(array, element) {
  const fragment = document.createDocumentFragment();
  const ul = document.createElement('ul');

  array.forEach(item => {
    const li = document.createElement('li');

    if (Array.isArray(item)) {
      generateList(item, li);
    } else {
      li.textContent = item;
    }

    ul.append(li);
  });

  fragment.append(ul);
  element.append(fragment);
}

button.addEventListener('click', () => {
  list.innerHTML = '';

  generateList(array, list);
});