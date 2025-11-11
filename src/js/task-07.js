const textInpyt = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

textInpyt.addEventListener("input", (event) => {
  //   console.log(spanText.style.fontSize);
  console.log(Number(event.currentTarget.value));
  console.log(Number(spanText.style.fontSize));

  spanText.style.fontSize = `${event.currentTarget.value}px`;
});
