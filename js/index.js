// document.addEventListener('DOMContentLoaded', () => {
//   document.addEventListener('scroll', (event) => {
//     const navbar = document.querySelector('.main-nav');

//     const scrollY = window.scrollY;

//     console.log(navbar.getBoundingClientRect())

//     if (scrollY > 80) {
//       navbar.classList.add('blue');
//     } else {
//       navbar.classList.remove('blue');
//     }

//     const obsv = new IntersectionObserver(() => {})

//     obsv.observe(navbar)
//   });
// });
// let json = require('');
// async function printJSON() {
//   const response = await fetch('../data/products.json');
//   const json = await response.json();
//   console.log(json);
//   return json
// }
// printJSON();

async function loadProducts() {
  const response = await fetch('../data/products.json');

  if (!response.ok) return [];

  const data = await response.json();

  return data;
}

async function fetchCart() {
  const response = await fetch('../data/carts/.json');

  if (!response.ok) return [];

  const cart = await response.json();

  return cart;
}

async function load() {
  let items = '';
  const products = await loadProducts();

  products
    .filter((val) => val.categories === 'new')
    .map(function (product, index) {
      items += `
         <div class="new-product-card" key=${index}>
          <img src=${product?.image} alt="" id="product"/>
          <div class="new-product-card-body">
            <div class="review">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <p>(10 Reviews)</p>
            </div>
            <p class="product-des">${product?.description}</p>
            <p class="amount"><span>$ ${product?.discount} </span> $ ${
        product?.price
      }</p>
            <button class="add-to-cart" onclick="addToCart()">Add to Cart</button>
          </div>
        </div>
     `;
    });
  document.getElementById('product-cards').innerHTML = items;
}

document.addEventListener('DOMContentLoaded', async () => {
  await load();
});

function openNavbar() {
  document.getElementById('mySidenav').style.width = '250px';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

const carts = () => {
  const allProducts = JSON.parse(localStorage.getItem('products'));
  let item = '';
  allProducts?.map(({ image }) => {
    item += `<div class="cart-content">
    <img src=${image} alt="">
    <div class="carts-btn">
    <button onclick="decreaseAmount()"><i class="fa-solid fa-minus"></i></button>
    <p id="nums">${num}</p>
    <button onclick="increaseAmount()"><i class="fa-solid fa-plus"></i></button>
    </div>
    </div>`;
  });
  document.getElementById('carts').innerHTML = item;
};

function openCart() {
  // carts();
  document.getElementById('myCart').style.width = '300px';
}

function closeCart() {
  document.getElementById('myCart').style.width = '0';
}

const addToCart = (product) => {
  console.log(product);
};
