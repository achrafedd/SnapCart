const cart = document.querySelector('.cart');

const openCart = () => {
    cart.classList.add("active")
}

const closeCart = () => {
    cart.classList.remove("active")
}

const swiper = new Swiper('.swiper', {
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
})