// console.log(document.querySelectorAll(".item").length);

const list = document.querySelector("#categories");
// console.dir(list);

// console.dir(list.children.length);
// console.log(list.children);
// const q = list.children.Animals.children.Pfujkjdjr.innerText;

// console.log(q);
// list.children.Animals.children.Pfujkjdjr.innerText =
//   list.children.Products.children.QQQQQ.innerText;
// list.children.Products.children.QQQQQ.innerText = q;

// console.log(
//   `Number of categories: ${document.querySelectorAll(".item").length}`
// );
// console.log(list.children[0].children[0].textContent);
// list.children.children;

// for (let i = 0; i < list.children.length; i += 1) {
//   for (let j = 0; j < list.children[i].children.length; j += 1) {
//     if (!list.children[i].children[j].children.length) {
//       console.log(`Category ${list.children[i].children[j].textContent}`);
//     } else {
//       console.log(`Elements ${list.children[i].children[j].children.length}`);
//     }
//   }
// }

const qqq = document.querySelectorAll(".item");
console.log(`Number of categories: ${qqq.length}`);
console.dir([...qqq]);
[...qqq].forEach((item) =>
  console.log(`Category: ${item.firstElementChild.textContent} \n 
    Elements: ${item.lastElementChild.children.length}`)
);
