const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
console.log(list);
// const markup = ingredients
//   .map((ing) => `<li class="item">${ing}</li>`)
//   .join("");
// console.log(markup);
// list.insertAdjacentHTML("beforeend", markup);

const markup = ingredients.map((ing) => {
  const li = document.createElement("li");
  li.textContent = ing;
  li.classList.add("item");
  list.append(li);
  return li;
});
console.log(markup);
// list.insertAdjacentHTML("beforeend", markup);
