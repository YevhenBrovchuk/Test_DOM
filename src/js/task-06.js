const text = document.querySelector("#validation-input");

const handlerInput = (evt) => {
  if (
    Number(evt.currentTarget.dataset.length) === evt.currentTarget.value.length
  ) {
    evt.currentTarget.style.borderColor = "green";
  } else {
    evt.currentTarget.style.borderColor = "red";
  }
};
text.addEventListener("blur", handlerInput);
