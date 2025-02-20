// Function to add a product to the cart
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    const existingProduct = cart.find(item => item.id === productId);
  
    if (existingProduct) {
      existingProduct.quantity += 1; 
    } else {
      cart.push({ id: productId, quantity: 1 });
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Dynamically update the cart icon after adding
    updateCartIcon();
  
    alert("Product added to cart!");
  }
  
  // Function to get the current cart
  function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }
  
  // Function to remove a product from the cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Dynamically update the cart icon after removing
    updateCartIcon();
  }
  
  // Function to update the cart icon with the total quantity
  function updateCartIcon() {
    const cart = getCart();
    const cartIcon = document.getElementById('cart-count');

    
    if (cartIcon) {
      cartIcon.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
  }
  
  // Make sure the cart icon is updated when the page loads
  document.addEventListener('DOMContentLoaded', updateCartIcon);
  