const productsElement = document.querySelector(".products");
let productsList = [];

const createProduct = () => {
  for (let i = 0; i < productsList.length; i++) {
    let { id, name, img, img_hover, price, old_price } = productsList[i];

    if (old_price) {
      let percent = Math.floor(((old_price - price) / old_price) * 100);

      productsElement.innerHTML += `
      <div data-id="${id}" class="product swiper-slide">
        <div class="product_img">
          <img src="assets/${img}" alt="${name}" />
          <img
            src="assets/${img_hover}"
            class="hover_img"
            alt="${name}"
          />
        </div>
        <div class="product_dicount">${percent}%</div>
        <div class="product_info">
          <a href="/product/${id}" class="product_title"
            >${name}</a
          >
          <div class="product_rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div class="product_price">
            <p class="new-price">$${price}</p>
            <p class="old-price">$${old_price}</p>
          </div>
        </div>
        <div data.id="${id}" class="product_cta">
          <i class="fa-solid fa-cart-plus addCart"></i>
          <i class="fa-regular fa-heart"></i>
          <i class="fa-solid fa-share"></i>
        </div>
      </div>
    `;
    }
  }
};

const fetchProducts = async () => {
  try {
    const res = await fetch("./js/items.json");
    const data = await res.json();
    productsList = data;
    createProduct();
    if (localStorage.getItem("cart")) {
      cartList = JSON.parse(localStorage.getItem("cart"));
      createCartItem();
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

fetchProducts();

