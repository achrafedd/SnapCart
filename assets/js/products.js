const productsElement = document.querySelector(".sale .products");
const featuredElement = document.querySelector(".featured .products");
const allProductsElement = document.querySelector("main .products");
const numbers = document.querySelector(".numbers");
let productsList = [];

const createProduct = (product) => {
  let { id, name, image, hoverImg, price, oldPrice } = product;
  const productElement = document.createElement("div");
  let percent = Math.floor(((oldPrice - price) / oldPrice) * 100);
  productElement.classList.add("product", "swiper-slide");
  productElement.dataset.id = id;

  productElement.innerHTML += `
    <a href="/product.html" >
    <div class="product_img">
      <img src="${image}" alt="${name}" />
      <img
        src="${hoverImg}"
        class="hover_img"
        alt="${name}"
      />
    </div>
    <span class="product_title">${name}</span>
    </a>
    ${oldPrice ? `<div class="product_dicount">${percent}%</div>` : ""}
    <div class="product_ctact_info">
      <div class="product_rating">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <div class="product_price">
      <p class="new-price">$${price}</p>
      ${oldPrice ? `<p class="old-price">$${oldPrice}</p>` : ""}
      </div>
    </div>
    <div class="product_cta">
      <i class="fa-solid fa-cart-plus addCart"></i>
      <i class="fa-regular fa-heart"></i>
      <i class="fa-solid fa-share"></i>
    </div>
  `;
  return productElement;
};

const saleProducts = () => {
  for (let i = 0; i < productsList.length; i++) {
    if (productsList[i].oldPrice) {
      productsElement?.appendChild(createProduct(productsList[i]));
    }
  }
};

const featuredProducts = () => {
  for (let i = 0; i < productsList.length; i++) {
    featuredElement?.appendChild(createProduct(productsList[i]));
  }
};

const allProducts = () => {
  allProductsElement.innerHTML = "";
  for (let i = 0; i < productsList.length; i++) {
    allProductsElement?.appendChild(createProduct(productsList[i]));
  }
};

const fetchProducts = async () => {
  try {
    const res = await fetch("./assets/js/items.json");
    const data = await res.json();
    productsList = data;
    saleProducts();
    featuredProducts();
    allProducts();
    pagination();
    if (localStorage.getItem("cart")) {
      cartList = JSON.parse(localStorage.getItem("cart"));
      createCartItem();
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

fetchProducts();
