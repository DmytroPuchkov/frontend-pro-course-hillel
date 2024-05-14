import products from './parts/products.js';
import createNode from './parts/createNode.js';
import createButton from './parts/createButton.js';
import createProduct from './parts/createProduct.js';
import clearContainer from './utils/clearContainer.js';

const shop = document.querySelector('.shop');
const productsContainer = document.querySelector('.container-products');
const infoContainer = document.querySelector('.container-info');
const orderInfoContainer = document.querySelector('.order-info');

// if (process.env.NODE_ENV === "development") {
//   console.log('Hello-o-o!!!');
// }

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

const showProductsByCategory = (category) => {
  clearContainer(productsContainer);
  clearContainer(infoContainer);
  clearContainer(orderInfoContainer);

  products[category].forEach((product) => {
    productsContainer.append(createProduct(product));
  });
};

const buyProduct = () => {
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
