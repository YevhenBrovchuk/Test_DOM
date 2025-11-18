function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const body = document.querySelector("body");
// const btnColor = document.querySelector(".change-color");
// const spanEl = document.querySelector(".color");

// btnColor.addEventListener("click", handlerBtn);

// const handlerBtn = () => {
//   const color = getRandomHexColor();
//   console.log(color);
//   body.style.backgroundColor = color;
//   spanEl.textContent = color;
//   console.log(color);
// };

// bodyBackgroundColor.style.backgroundColor = "teal";
// console.dir(bodyBackgroundColor.style);

const btnEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
btnEl.addEventListener("click", onClick);
function onClick() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;
}
