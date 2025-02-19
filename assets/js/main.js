const cart = document.querySelector(".cart");
const backButton = document.querySelector(".back");

const openCart = () => {
	cart.classList.add("active");
};

const closeCart = () => {
	cart.classList.remove("active");
};

backButton?.addEventListener("click", () => {
	window.scrollTo(0, 0);
});
