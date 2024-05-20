document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    
    
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    
    if (cartItems.length === 0) {
      cartItemsContainer.innerHTML = '<p>Din kundvagn är tom</p>';
    } else {
      const ul = document.createElement('ul');
      cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
      cartItemsContainer.appendChild(ul);
    }
  });
  