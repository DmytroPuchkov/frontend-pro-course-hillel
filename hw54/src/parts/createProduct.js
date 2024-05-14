import createNode from './createNode.js';
import createButton from './createButton.js';

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

export default createProduct;