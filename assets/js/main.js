const cart = document.querySelector(".cart");
const backButton = document.querySelector(".back");
const detailsBtn = document.querySelector(".details-btn");
const reviewsBtn = document.querySelector(".reviews-btn");
const details = document.querySelector(".details");
const reviews = document.querySelector(".reviews");

const openCart = () => {
  cart.classList.add("active");
};

const closeCart = () => {
  cart.classList.remove("active");
};

backButton?.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

detailsBtn.addEventListener("click", () => {
  reviewsBtn.classList.remove("active");
  detailsBtn.classList.add("active");
  reviews.classList.remove("active");
  details.classList.add("active");
});

reviewsBtn.addEventListener("click", () => {
  detailsBtn.classList.remove("active");
  reviewsBtn.classList.add("active");
  details.classList.remove("active");
  reviews.classList.add("active");
});
