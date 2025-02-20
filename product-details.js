
  const products = [
    {
        "id": "1",
        "title": "Jacket 1",
        "description": "Your new go-to water-repellent rain jacket.",
        "price": 60,
        "discountedPrice": 55,
        "gender": 'female',
        "sizes": ["S", "M", "L", "XXL"],
        "onSale": true,
        "image": {
          "url": "./images/jacket-white.png",
          "alt": "A white  jacket with a furry  hood"
        }
    },

    {
        "id": "2",
        "title": "Jacket 2",
        "description": "Your new go-to water-repellent rain jacket.",
        "price": 70,
        "discountedPrice": 55,
        "gender": 'male',
        "sizes": ["S", "L"],
        "onSale": false,
        "image": {
          "url": "./images/jacket-green.jpg",
          "alt": "A green fleece jacket"
        }
    },

    {
        "id": "3",
        "title": "Jacket 3",
        "description": "Your new go-to water-repellent rain jacket.",
        "price": 80,
        "discountedPrice": 55,
        "gender": 'female',
        "sizes": ["XS", "S", "L", "XL"],
        "onSale": false,
        "image": {
          "url": "./images/jacket-blue.png",
          "alt": "A light blue fleece jacket"
        }
    },

    {
        "id": "4",
        "title": "Jacket 4",
        "description": "Your new go-to water-repellent rain jacket.",
        "price": 50,
        "discountedPrice": 40,
        "gender": 'female',
        "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
        "onSale": false,
        "image": {
          "url": "./images/jacket-red.png",
          "alt": "A bright red fleece jacket"
        }
    },

    {
        "id": "5",
        "title": "Jacket 5",
        "description": "Your new go-to water-repellent rain jacket.",
        "price": 60,
        "discountedPrice": 40,
        "gender": 'male',
        "sizes": ["S", "M", "L"],
        "onSale": true,
        "image": {
          "url": "./images/jacket-yellow-home.png",
          "alt": "A yellow and light brown rain jacket"
        }
    },

    {
        "id": "6",
        "title": "Jacket 6",
        "description": "Your new go-to water-repellent rain jacket.",
        "price": 50,
        "discountedPrice": 40,
        "gender": 'female',
        "sizes": ["M", "L", "XL", "XXL"],
        "onSale": false,
        "image": {
          "url": "./images/jacket-black.jpg",
          "alt": "A black and gray windbreaker"
        }
    },

    {
        "id": "7",
        "title": "Jacket 7",
        "description": "Your new go-to water-repellent rain jacket.",
        "price": 80,
        "discountedPrice": 40,
        "gender": 'male',
        "sizes": ["XS", "S", "M", "XXL"],
        "onSale": false,
        "image": {
          "url": "./images/red-mens-jacket.jpg",
          "alt": "A red and black windbreaker"
        }
    },

    {
        "id": "8",
        "title": "Jacket 8",
        "description": "Your new go-to water-repellent rain jacket.",
        "price": 50,
        "discountedPrice": 40,
        "gender": 'male',
        "sizes": ["XS", "S", "M", "L"],
        "onSale": false,
        "image": {
          "url": "./images/grey-jacket.jpg",
          "alt": "A grey rain jacket"
        }
    },

    {
        "id": "9",
        "title": "Jacket 9",
        "description": "Your new go-to water-repellent rain jacket.",
        "price": 90,
        "discountedPrice": 40,
        "gender": 'male',
        "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
        "onSale": false,
        "image": {
          "url": "./images/orange-jacket.jpg",
          "alt": "An orange and gray rain jacket"
        }
    },
    {
        "id": "10",
        "title": "Jacket 10",
        "description": "Your new go-to water-repellent rain jacket.",
        "price": 75,
        "discountedPrice": 40,
        "gender": 'male',
        "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
        "onSale": false,
        "image": {
          "url": "./images/black-yellow-jacket.jpg",
          "alt": "A black jacket with yellow pocket zipper"
        }
    },
]


import { addToCart, updateCartIcon } from './cart.js';

async function fetchSingleProduct(id) {
  try {
    const response = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${id}`);
    const data = await response.json();
    displayProductDetails(data);
  } catch (error) {
    console.error("Error fetching product details:", error);
    displayLocalProduct(id); // Fallback to local products
  }
}

// Display product details using local data as a fallback
function displayLocalProduct(id) {
  const localProduct = products.find(p => p.id === id);
  if (localProduct) {
    displayProductDetails(localProduct);
  } else {
    console.error("Product not found locally or on the API");
  }
}

function displayProductDetails(product) {
  const productDetailsContainer = document.getElementById('product-details');
  const price = product.onSale ? product.discountedPrice : product.price;

  const sizeOptions = product.sizes
    ? product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')
    : '<option value="N/A">N/A</option>';

  productDetailsContainer.innerHTML = `
    <img src="${product.image.url}" alt="${product.image.alt}">
    <div class="details-content">
      <h1>${product.title}</h1>
      <p>${product.description}</p>
      <p class="price"><strong>Price:</strong> $${price}</p>
      <p><strong>Available Sizes:</strong> ${product.sizes?.join(", ") || 'N/A'}</p>
      <label for="size-select"><strong>Select Size:</strong></label>
      <select id="size-select">${sizeOptions}</select>
      <button id="add-to-cart-btn">Add to Cart</button>
    </div>
  `;

  document.getElementById('add-to-cart-btn').addEventListener('click', () => {
    addToCart(product.id);
  });
}

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
if (productId) fetchSingleProduct(productId);

// Update cart icon when page loads
updateCartIcon();

