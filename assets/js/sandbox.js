function counter() {
  let count = 0;
  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
  };
}

const counter1 = counter();
const counter2 = counter();

const createAdder = (n) => (m) => (n += m);

// function createAdder(n) {
//   return (m) => {
//     return n+=m;
//   }
// }

const test = createAdder(10);
test(20);

const btn = document.querySelector('#unique')

function createBtnHandler(clicksAmount = 5) {
  const btnHandler = ({ target: targetBtn }) => {
    if (clicksAmount <= 0) {
      targetBtn.removeEventListener("click", btnHandler);
      return;
    }
    alert("Success!");
    clicksAmount--;
  };
  return btnHandler;
}

btn.addEventListener('click', createBtnHandler(3));