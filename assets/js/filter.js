const colors = document.querySelectorAll(".color");
const box = document.querySelectorAll(".box");
let filters = {
  color: [],
  price: {
    min: 0,
    max: 3000,
  },
  size: "",
};

for (let i = 0; i < colors.length; i++) {
  let color = colors[i].classList[1];
  colors[i].style.background = color;

  colors[i].addEventListener("click", () => {
    let index = filters.color.indexOf(color);
    console.log(index);
    if (index >= 0) {
      filters.color.splice(index, index + 1);
      colors[i].classList.remove("active");
    } else {
      filters.color.push(color);
      colors[i].classList.add("active");
    }
    console.log(filters.color);
  });
}

for (let i = 0; i < box.length; i++) {
  const title = box[i].firstElementChild;
  const content = box[i].lastElementChild;

  title.addEventListener("click", (e) => {
    title.classList.toggle("active");
    content.classList.toggle("active");
  });
}
