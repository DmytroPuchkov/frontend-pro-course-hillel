const productsContainer = document.querySelector('.container-products');
const shop = document.querySelector('.shop');
const infoContainer = document.querySelector('.container-info');
const orderInfoContainer = document.querySelector('.order-info');

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

const createNode = (elementType, className, textContent, action) => {
  const element = document.createElement(elementType);

  if (className) className.split(' ').forEach(cls => element.classList.add(cls));
  if (textContent) element.innerText = textContent;
  if (action) element.dataset.action = action;

  return element;
};

const createButton = (className, title, action) => {
  const button = createNode('button', className, title);

  if (action) button.dataset.action = action;

  return button;
};

const createProduct = (product) => {
  const div = createNode('div', `product`);
  const productImage = createNode('img');
  const productDescription = createNode('p', 'description hide', product.description);
  const productTitle = createNode('p', 'title', product.title);
  const productPrice = createNode('p', 'price', product.price);
  const btnInfo = createButton('btn', 'Info', 'info');
  const btnBuy = createButton('btn hide', 'Buy', 'buy');

  productImage.src = product.src;

  div.appendChild(productImage);
  div.appendChild(productTitle);
  div.appendChild(productDescription);
  div.appendChild(productPrice);
  div.appendChild(btnInfo);
  div.appendChild(btnBuy);

  return div;
};

const showProductsByCategory = (category) => {
  clearContainer(productsContainer);
  clearContainer(infoContainer);
  clearContainer(orderInfoContainer);

  products[category].forEach((product) => {
    productsContainer.append(createProduct(product));
  });
};

const showFullProductInfo = () => {
  clearContainer(infoContainer);

  const product = event.target.closest('.product');
  const clonedProduct = product.cloneNode(true);
  const hiddenElements = clonedProduct.querySelectorAll('.hide');

  hiddenElements.forEach(element => {
    element.classList.remove('hide');
  });

  clonedProduct.querySelector('button[data-action="info"]').classList.add('hide');
  clonedProduct.classList.add('product-info');

  infoContainer.appendChild(clonedProduct);
};

buyProduct = () => {
  const form = document.createElement('form');

  form.innerHTML = `
    <input type="text" name="fullName" placeholder="ПІБ" required>
    <select name="city" required>
      <option value="">Куди відправляємо?</option>
      <option value="Київ">Київ</option>
      <option value="Харків">Харків</option>
    </select>
    <input type="text" name="postOffice" placeholder="Склад Нової пошти" required>
    <select name="paymentMethod" required>
      <option value="">Виберіть спосіб оплати</option>
      <option value="card">Банківська картка</option>
      <option value="cash">Післяплата</option>
      <option value="fop">Реквізити ФОП</option>
    </select>
    <input type="number" name="quantity" min="1" placeholder="Кількість" required>
    <textarea name="comment" placeholder="Коментар до замовлення"></textarea>
    <button type="submit">Підтвердити замовлення</button>
  `;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const orderInfo = `
    <div class="order-container">
      <p class="order-title-header">Інформація про замовлення</p>
      <p class="order-title">ПІБ: ${formData.get('fullName')}</p>
      <p class="order-title">Місто: ${formData.get('city')}</p>
      <p class="order-title">Склад Нової пошти: ${formData.get('postOffice')}</p>
      <p class="order-title">Спосіб оплати: ${formData.get('paymentMethod')}</p>
      <p class="order-title">Кількість: ${formData.get('quantity')}</p>
      <p class="order-title">Коментар: ${formData.get('comment')}</p>
    </div>
    `;

    orderInfoContainer.innerHTML = orderInfo;

    clearContainer(infoContainer);
  });

  orderInfoContainer.appendChild(form);
};

const clearContainer = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

const operations = {
  'open-smartphones': () => showProductsByCategory('smartphones'),
  'open-tablets': () => showProductsByCategory('tablets'),
  'open-watches': () => showProductsByCategory('watches'),
  'info': () => showFullProductInfo(),
  'buy': () => buyProduct(),
};

const onClickHandler = (event) => {
  const action = event.target.dataset.action;

  if (typeof operations[action] === 'function') {
    operations[action]();
  }
};

shop.addEventListener('click', onClickHandler);
