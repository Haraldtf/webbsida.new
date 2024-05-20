document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartDropdown = document.querySelector('.cart-dropdown');
    let cartItems = [];
  
    function updateCart() {
      cartDropdown.innerHTML = '';
  
      if (cartItems.length === 0) {
        cartDropdown.innerHTML = '<p>Din kundvagn är tom</p>';
      } else {
        const ul = document.createElement('ul');
        cartItems.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          ul.appendChild(li);
        });
        cartDropdown.appendChild(ul);
      }
    }
  
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCart();
      });
    });
  
    updateCart();
  });
  