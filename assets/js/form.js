"use strict";

const form = document.getElementById("rootForm");
const list = document.getElementById("inputList");

let results = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    target,
    target: {
      elements: { email },
    },
  } = e;

  if (email.value.trim() && !results.includes(email.value)) {
    results.push(email.value);
    list.append(createListElementWithBtn(email.value));
  }
  target.reset();
  console.log(results);
});

function createDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", ({ target }) => {
    const item = target.parentNode.childNodes[0].data;
    results.splice(results.indexOf(item), 1);
    target.parentNode.remove();
  });
  return deleteBtn;
}

function createListElementWithBtn(listElementText) {
  const listItem = document.createElement("li");
  listItem.innerText = listElementText;
  listItem.append(createDeleteBtn()); //adding delete button
  return listItem;
}
