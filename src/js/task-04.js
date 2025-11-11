const selectors = {
  counterValue: document.querySelector("#value"),
  btnDecriment: document.querySelector('button[data-action="decrement"]'),
  btnIncrement: document.querySelector('button[data-action="increment"]'),
};
let counter = 0;
console.log(selectors.counterValue);

const hadlerClck = (evt) => {
  console.log(evt.currentTarget.dataset.action === "decrement");
  console.log(evt);

  if (evt.currentTarget.dataset.action === "decrement") {
    counter -= 1;
    selectors.counterValue.textContent = counter;
  } else {
    counter += 1;
    selectors.counterValue.textContent = counter;
  }
};
selectors.btnDecriment.addEventListener("click", hadlerClck);
selectors.btnIncrement.addEventListener("click", hadlerClck);
