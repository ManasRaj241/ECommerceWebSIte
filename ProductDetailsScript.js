const addCart = document.getElementById('AddToCart');

cart = [];

function changeTo(e) {
  e.preventDefault();
  if (addCart.innerHTML == 'Added') {
    return;
  }
  addCart.innerHTML = '';
  addCart.appendChild(document.createTextNode('Added'));

  const det = document.getElementById('details');

  const nameOfProduct = det.querySelector('h1').innerHTML;
  console.log(nameOfProduct);

  const priceOfProduct = det.querySelector('h4').innerHTML;
  console.log(priceOfProduct.replace(',', ''));

  const qty = det.querySelector('input').value;
  console.log(qty);

  let fprice = qty * priceOfProduct.replace(',', '');
  console.log(fprice);

  cart[cart.length] = {
    image: 'images/buy-1.jpg',
    name: nameOfProduct,
    quantity: qty,
    price: fprice,
  };

  if (sessionStorage.getItem('Array') != null) {
    sessionStorage.removeItem('Array');
  }

  sessionStorage.setItem('Array', JSON.stringify(cart));
}

addCart.addEventListener('click', changeTo);
