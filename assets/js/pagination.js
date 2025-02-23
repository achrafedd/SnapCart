const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const nums = document.querySelector(".nums");
const productsPerPage = 12;
let currentPage = 1;

function displayPage(page, products) {
  let start = (page - 1) * productsPerPage;
  let end = start + productsPerPage;

  products.forEach((product, index) => {
    if (index >= start && index < end) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

function pagination() {
  const productsContainer = document.querySelector(".products");
  const totalPages = Math.ceil(productsList.length / productsPerPage);
  const products = Array.from(productsContainer.querySelectorAll(".product"));

  function prevFn() {
    if (currentPage > 1) {
      currentPage--;
      displayPage(currentPage, products);
    }
  }

  function nextFn() {
    if (currentPage < totalPages) {
      currentPage++;
      displayPage(currentPage, products);
    }
  }

  prev.addEventListener("click", prevFn);
  next.addEventListener("click", nextFn);

  for (let n = 1; n <= totalPages; n++) {
    let span = document.createElement("span");
    span.innerText = n;
    span.addEventListener("click", (e) => {
      currentPage = +e.target.innerText;
      displayPage(currentPage, products);
    });
    nums.appendChild(span);
  }
  displayPage(currentPage, products);
}
