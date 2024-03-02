const fetchAllProducts = async () => {
  return (await fetch("https://dummyjson.com/products")).json();
};

const renderProducts = async () => {
  let products = await fetchAllProducts();

  products = Array.isArray(products) ? products : products.products || [];

  console.log(products, 'products');

  const getProductId = ({ id }) => (`${id}`);

  const getProductImage = ({ thumbnail, title }) => (`
    <img src="${thumbnail}" alt="${title}" class="image" />
  `);

  const getProductTitle = ({ title }) => (`
    <div class="title">
      <h4>${title}</h4>
    </div>
  `);

  const getProductPrice = ({ price, discountPercentage }) => {
    const discountedPrice = price - (price * (discountPercentage / 100));

    return (`
      <div class="price">
        <div class="price-old">$${price}</div>
        <div class="price-off">-${discountPercentage}% OFF</div>
        <div class="price-new">New: $${discountedPrice.toFixed(2)}</div>
      </div>
    `);
  };

  const getProductDescription = ({ description }) => (`
    <div class="description">${description}</div>
  `);

  let template = products.map(product => `
  <section class="product-item">
    <div class="image-wrapper">
      ${getProductImage(product)}
    </div>
    <div class="content-wrapper">
      ${getProductTitle(product)}
      ${getProductPrice(product)}
      ${getProductDescription(product)}
      <div class="actions">
        <button id="cart-${getProductId(product)}" class="button green-solid cart">
            Add to Cart
        </button>
        <button class="button more">More Details</button>
      </div>
    </div>
  </section>
`).join('');

  document.body.innerHTML = template;
}

renderProducts();