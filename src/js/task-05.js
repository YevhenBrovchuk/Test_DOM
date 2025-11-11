const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

console.dir(textInput);

// const handlerInput = (evt) =>
//   evt.currentTarget.value
//     ? (output.textContent = evt.currentTarget.value)
//     : (output.textContent = "Anonymous");
textInput.addEventListener("input", (evt) =>
  evt.currentTarget.value
    ? (output.textContent = evt.currentTarget.value)
    : (output.textContent = "Anonymous")
);
