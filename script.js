const form = document.querySelector("#form");
const input = document.querySelector("#input");
const ul = document.querySelector("#todo-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodoItem();
});

function addTodoItem() {
  const todoItem = input.value;
  if (todoItem === "") {
    return;
  } else {
    const newLi = document.createElement("li");
    newLi.innerText = input.value;
    ul.appendChild(newLi);
    input.value = "";
    input.blur();
    newLi.addEventListener("click", () => {
      newLi.classList.toggle("checked");
    });
    newLi.addEventListener(
      "mousedown",
      (e) => {
        e.preventDefault();
      },
      false
    );
  }
}

// ---METODO 2, NON LAVORIAMO SUL FORM MA SINGOLARMENTE SUL BOTTONE E SULL'INPUT---

// const button = document.querySelector("#button");

// button.addEventListener("click", function (e) {
//   e.preventDefault();
//   const todoItem = input.value;

//   if (todoItem === "") {
//     return;
//   } else {
//     const newLi = document.createElement("li");
//     newLi.innerText = input.value;
//     ul.appendChild(newLi);
//     input.value = "";
//     input.blur();
//     newLi.addEventListener("click", () => {
//       newLi.classList.toggle("checked");
//     });
//   }
// });
