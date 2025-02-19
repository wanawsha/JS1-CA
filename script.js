async function fetchAllProducts() {
    try {
      const response = await fetch('https://docs.noroff.dev/docs/v2/e-commerce/rainy-days'); 
      const data = await response.json();
      
      displayProducts(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  
  function displayProducts(products) {
    const productsContainer = document.querySelector('.products-container');
  
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      const price = product.onSale ? product.discountedPrice : product.price;
  
      productCard.innerHTML = `
        <img src="${product.image.url}" alt="${product.image.alt}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p>Price: $${price}</p>
        <button onclick="addToCart('${product.id}')">Add to Cart</button>
        <a href="product-details.html?id=${product.id}">View Details</a>
      `;
  
      productsContainer.appendChild(productCard);
    });
  }

  function handleFilterChange() {
    const selectedGender = document.getElementById('gender-filter').value;

    if (selectedGender === 'all') {
      displayProducts(allProducts);  // Show all products if "All" is selected
    } else {
      const filteredProducts = allProducts.filter(product => product.gender === selectedGender);
      displayProducts(filteredProducts);  // Show filtered products based on selected gender
    }
  }
  
  fetchAllProducts();
  




  // Single product by ID
async function fetchSingleProduct(id) {
    try {
      const response = await fetch(`https://docs.noroff.dev/docs/v2/e-commerce/rainy-days${id}`); 
      const data = await response.json();
      
      displayProductDetails(data.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  }
  
  function displayProductDetails(product) {
    const productDetailsContainer = document.getElementById('product-details');
  
    const price = product.onSale ? product.discountedPrice : product.price;
  
    productDetailsContainer.innerHTML = `
      <img src="${product.image.url}" alt="${product.image.alt}">
      <h1>${product.title}</h1>
      <p>${product.description}</p>
      <p>Price: $${price}</p>
      <p>Available Sizes: ${product.sizes.join(", ")}</p>
      <p>Base Color: ${product.baseColor}</p>
      <button onclick="addToCart('${product.id}')">Add to Cart</button>
    `;
  }
  
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  
  if (productId) {
    fetchSingleProduct(productId);
  }
  



// Add to cart

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productId) {
  // Find the product by ID in the list of products or fetch the single product
  fetchSingleProduct(productId).then(product => {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage
    updateCartIcon();
  });
}

function updateCartIcon() {
  const cartCount = document.querySelector("#cart-count");
  cartCount.textContent = cart.length;
}

updateCartIcon();



const products = [
    {
        "id": "1",
        "title": "Jacket 1",
        "description": "Your new go-to water-repellent rain jacket.",
        "price": 60,
        "discountedPrice": 55,
        "gender": 'female',
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
        "onSale": false,
        "image": {
          "url": "./images/grey-jacket.jpg",
          "alt": "A grey rain jacket"
        }
    },

    {
        "id": "8",
        "title": "Jacket 8",
        "description": "Your new go-to water-repellent rain jacket.",
        "price": 90,
        "discountedPrice": 40,
        "gender": 'male',
        "onSale": false,
        "image": {
          "url": "./images/orange-jacket.jpg",
          "alt": "An orange and gray rain jacket"
        }
    },
    {
        "id": "9",
        "title": "Jacket 9",
        "description": "Your new go-to water-repellent rain jacket.",
        "price": 75,
        "discountedPrice": 40,
        "gender": 'male',
        "onSale": false,
        "image": {
          "url": "./images/black-yellow-jacket.jpg",
          "alt": "A black jacket with yellow pocket zipper"
        }
    },
]

displayProducts(products);




