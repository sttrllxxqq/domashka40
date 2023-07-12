// 40
function displayProducts(category) {
  const productList = document.getElementById('product-list');
  const productInfoDiv = document.getElementById('product-info');

  productList.innerHTML = '';
  productInfoDiv.innerHTML = '';

  for (let i = 1; i <= 5; i++) {
    const product = document.createElement('li');
    product.textContent = `Товар ${i} (${category})`;
    product.classList.add('product-item');
    product.onclick = function() {
      displayProductInfo(`Товар ${i}`, category);
    };
    productList.appendChild(product);
  }
}

function displayProductInfo(productName, category) {
  const productInfoDiv = document.getElementById('product-info');

  productInfoDiv.innerHTML = '';

  const productInfo = document.createElement('div');
  productInfo.textContent = `Назва: ${productName}\nКатегорія: ${category}`;

  const buyButton = document.createElement('button');
  buyButton.textContent = 'Купити';
  buyButton.onclick = function() {
    buyProduct(productName);
  };

  productInfo.appendChild(buyButton);
  productInfoDiv.appendChild(productInfo);
}

function buyProduct(productName) {
  alert(`Товар "${productName}" куплений!`);
  displayProducts();
}
