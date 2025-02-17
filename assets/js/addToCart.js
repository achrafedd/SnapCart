/*==============
 * Add to Cart
 ============= */
const cartItemsElement = document.querySelector(".cart-items");
let cartItemsQuantity = document.querySelector(".count_items");
let subTotal = document.querySelector(".sub_total span");
let cartTotal = document.querySelector(".price_cart");
let totalItems = document.querySelector(".total_items");
let cartList = [];

productsElement.addEventListener("click", (e) => {
	let positionClick = e.target;
	if (positionClick.classList.contains("addCart")) {
		let product_id = positionClick.parentElement.parentElement.dataset.id;
		addToCart(product_id);
	}
});

featuredElement.addEventListener("click", (e) => {
	let positionClick = e.target;
	if (positionClick.classList.contains("addCart")) {
		let product_id = positionClick.parentElement.parentElement.dataset.id;
		addToCart(product_id);
	}
});

const addToCart = (id) => {
	const positionProductInTheCart = cartList.findIndex(
		(value) => value.product_id === id
	);
	if (cartList.length <= 0) {
		cartList = [
			{
				product_id: id,
				quantity: 1,
			},
		];
	} else if (positionProductInTheCart < 0) {
		cartList.push({
			product_id: id,
			quantity: 1,
		});
	} else {
		cartList[positionProductInTheCart].quantity += 1;
	}
	createCartItem();
};

const createCartItem = () => {
	let total_price = 0;
	cartItemsElement.innerHTML = "";
	if (cartList.length > 0) {
		cartList.forEach((cart) => {
			let cartItem = document.createElement("div");
			cartItem.classList.add("item");

			let position = productsList.findIndex(
				(value) => value.id == cart.product_id
			);
			if (productsList[position] === undefined) return;
			let { name, price, img } = productsList[position];
			total_price += price * cart.quantity;
			cartItem.innerHTML += `
          <img src="${img}" alt="${name}" />
          <div class="item-info">
            <h4>${name}</h4>
            <div class="box">
              <p class="price">$${price * cart.quantity}</p>
              <div class="quantity">
                <span onclick="minus(${cart.product_id})" class="minus"><</span>
                <span class="num">${cart.quantity}</span>
                <span onclick="plus(${cart.product_id})" class="plus">></span>
              </div>
            </div>
          </div>
        `;
			cartItemsElement.appendChild(cartItem);
		});
	}
	cartItemsQuantity.innerHTML = cartList.length;
	totalItems.innerHTML = cartList.length;
	cartTotal.innerHTML = `$${total_price}`;
	subTotal.innerHTML = `$${total_price}`;
	addToMemory();
};

const plus = (product_id) => {
	let position = cartList.findIndex((value) => value.product_id == product_id);
	cartList[position].quantity += 1;
	createCartItem();
};

const minus = (product_id) => {
	let position = cartList.findIndex((value) => value.product_id == product_id);
	if (cartList[position].quantity == 1) {
		cartList.splice(position, 1);
		createCartItem();
		return;
	}
	cartList[position].quantity -= 1;
	createCartItem();
};

const addToMemory = () => {
	localStorage.setItem("cart", JSON.stringify(cartList));
};
