"use strict";

const btns = document.querySelectorAll("#root > button");

const changeColor = ({
  target: {
    parentNode,
    dataset: { color },
  },
}) => {
  parentNode.style = `background: ${color}`;
};

for (const btn of btns) {
  btn.addEventListener("click", changeColor);
}
