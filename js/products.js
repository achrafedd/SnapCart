const productsElement = document.querySelector(".sale .products");
const featuredElement = document.querySelector(".featured .products");
let productsList = [];

const createProduct = (product) => {
  let { id, name, img, img_hover, price, old_price } = product;
  const productElement = document.createElement("div");
  let percent = Math.floor(((old_price - price) / old_price) * 100);
  productElement.classList.add("product", "swiper-slide");

  productElement.innerHTML += `
    <div class="product_img">
      <img src="assets/${img}" alt="${name}" />
      <img
        src="assets/${img_hover}"
        class="hover_img"
        alt="${name}"
      />
    </div>
    ${old_price ? `<div class="product_dicount">${percent}%</div>` : ""}
    <div class="product_ctact_info">
      <a href="/product/${id}" class="product_title"
        >${name}</a>
      <div class="product_rating">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <div class="product_price">
      <p class="new-price">$${price}</p>
      ${old_price ? `<p class="old-price">$${old_price}</p>` : ""}
      </div>
    </div>
    <div data.id="${id}" class="product_cta">
      <i class="fa-solid fa-cart-plus addCart"></i>
      <i class="fa-regular fa-heart"></i>
      <i class="fa-solid fa-share"></i>
    </div>
  `;
  return productElement;
};

const saleProducts = () => {
  for (let i = 0; i < productsList.length; i++) {
    if (productsList[i].old_price) {
      productsElement.appendChild(createProduct(productsList[i]));
    }
  }
};

const featuredProducts = () => {
  for (let i = 0; i < productsList.length; i++) {
    featuredElement.appendChild(createProduct(productsList[i]));
  }
};

const fetchProducts = async () => {
  try {
    const res = await fetch("./js/items.json");
    const data = await res.json();
    productsList = data;
    saleProducts();
    featuredProducts();
    if (localStorage.getItem("cart")) {
      cartList = JSON.parse(localStorage.getItem("cart"));
      createCartItem();
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

fetchProducts();
