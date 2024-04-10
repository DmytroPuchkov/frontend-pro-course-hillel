const productsContainer = document.querySelector('.container-products');
const shop = document.querySelector('.shop');
const infoContainer = document.querySelector('.container-info');

const products = {
  smartphones: [
    { title: 'Apple', description: 'Dynamic Island.For when things just pop up.', price: '$1600', src: './img/product2.png' },
    { title: 'Samsung', description: 'Dynamic Island.For when things just pop up.', price: '$899', src: './img/product3.png' },
    { title: 'Google', description: 'Dynamic Island.For when things just pop up.', price: '$899', src: './img/product7.png' },
    { title: 'Xiaomi', description: 'Dynamic Island.For when things just pop up.', price: '$400', src: './img/product8.png' },
    { title: 'Asus', description: 'Dynamic Island.For when things just pop up.', price: '$515', src: './img/product6.png' },
    { title: 'Motorola', description: 'Dynamic Island.For when things just pop up.', price: '$600', src: './img/product4.png' },
  ],
  tablets: [
    { title: 'Microsoft', description: 'Dynamic Island.For when things just pop up.', price: '$360', src: './img/product5.png' },
  ],
  watches: [
    { title: 'Garmin', description: 'Dynamic Island.For when things just pop up.', price: '$1500', src: './img/product1.png' },
  ]
};

const createProduct = (product, index) => {
  const div = document.createElement('div');
  const productImage = document.createElement('img');
  const productDescription = document.createElement('p');
  const productTitle = document.createElement('p');
  const productPrice = document.createElement('p');
  const btnBuy = document.createElement('button');

  div.classList.add('product', `product-${index + 1}`);
  div.dataset.action = 'show-info';

  productImage.src = product.src;
  productDescription.innerText = product.description;
  productTitle.innerText = product.title;
  productPrice.innerText = product.price;
  btnBuy.innerText = 'Buy';

  productTitle.classList.add('title');
  productDescription.classList.add('description', 'hide');
  btnBuy.classList.add('btn', 'hide');
  btnBuy.dataset.action = 'buy-product';
  productPrice.classList.add('price');

  div.appendChild(productImage);
  div.appendChild(productTitle);
  div.appendChild(productDescription);

  div.appendChild(productPrice);
  div.appendChild(btnBuy);

  return div;
};

const showProductsByCategory = (category) => {
  productsContainer.innerHTML = '';

  products[category].forEach((product, index) => {
    productsContainer.append(createProduct(product, index));
  });
};

const showFullProductInfo = (event) => {
  const clickedElement = event.target;
  const clonedElement = clickedElement.cloneNode(true);
  const hideElement = clonedElement.querySelectorAll('.hide');

  infoContainer.innerHTML = '';
  infoContainer.appendChild(clonedElement);
  clonedElement.classList.add('info');

  hideElement.forEach((element) => {
    element.classList.remove('hide');
  });
};

const buyProduct = () => {
  alert('Ви здійснили покупку!')
  productsContainer.innerHTML = '';
  infoContainer.innerHTML = '';
};

const operations = {
  'open-smartphones': () => showProductsByCategory('smartphones'),
  'open-tablets': () => showProductsByCategory('tablets'),
  'open-watches': () => showProductsByCategory('watches'),
  'show-info': () => showFullProductInfo(event),
  'buy-product': () => buyProduct(),
};

const onClickHandler = (event) => {
  const element = event.target;
  const action = element.dataset.action;

  if (typeof operations[action] === 'function') {
    operations[action]();
  }
};

shop.addEventListener('click', onClickHandler);