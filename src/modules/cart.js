const cart = () => {
  const cartBtn = document.querySelector('#cart');
  const cartList = document.querySelector('.cart');
  const cartClose = document.querySelector('.cart-close');

  function open() {
    cartList.style.display = 'flex';
  }
  function close() {
    cartList.style.display = '';
  }
  cartBtn.addEventListener('click', open);
  cartClose.addEventListener('click', close);
};
export default cart;
