"use strict";

const form = document.getElementById("rootForm");

let results = [];
const list = document.getElementById("inputList");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    target,
    target: {
      elements: { email },
    },
  } = e;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", ({ target }) => {
    const item = target.parentNode.childNodes[0].data;
    results = results.filter((elem) => elem !== item);
    target.parentNode.parentNode.removeChild(target.parentNode);
  });

  if (results.includes(email.value)) {
    target.reset();
    return;
  }

  if (email.value) {
    results.push(email.value);
    const listItem = document.createElement("li");
    listItem.innerText = email.value;
    listItem.append(deleteBtn);
    list.append(listItem);
  }
  target.reset();
  console.log(results);
});
