"use strict";
const phone = document.querySelector("#phone");
const yes = document.querySelector("#yes");
const bigger = document.querySelector("#bigger");
const less = document.querySelector("#less");
const buttons = document.querySelector("#buttons");

function binarySearch(arr, value) {
  // let mid = Math.floor(array.length / 2);
  // let start = 0;
  // let end = array.length - 1;
  // while (start < end) {
  //   debugger;
  //   if (item === array[mid]) return mid;
  //   if (mid === start) return -1;
  //   if (item > array[mid]) {
  //     start = mid;
  //     mid = Math.floor((end + start) / 2);
  //   }
  //   if (item < array[mid]) {
  //     end = mid;
  //     mid = Math.floor((end + start) / 2);
  //   }
  // }
  // return -1;
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let guess = arr[mid];
    if (guess === value) {
      return mid;
    }
    if (guess > value) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

phone.textContent = "499999999";
let low = 0;
let high = 999999999;
let counter = 0;
buttons.addEventListener('click', (event) => { 
  let target = event.target;
  if (target.id === "yes") {
    console.log("yes");
    target.disabled = true;
    bigger.disabled = true;
    less.disabled = true;
  }
  if (target.id === "bigger") {
    low = Number(phone.textContent);
    numGuesser(low, high);
    counter++;
    console.log(counter);
  }
  if (target.id === "less") {
    high = Number(phone.textContent);
    numGuesser(low, high);
    counter++;
    console.log(counter);
  }
});

function numGuesser(startValue = 0, endValue = 999999999) {
  let start = startValue;
  let end = endValue;
  let middle = Math.floor((start + end) / 2);
  phone.textContent = middle;
}

/*function numGuesser(startValue = 0, endValue = 999999999) {
  let start = startValue;
  let end = endValue;
  while(true) {
    let middle = Math.round((start + end) / 2);
    if(confirm(`Ваше число ${middle}?`)) {
      return middle;
    }
    if (confirm(`Ваше число больше чем ${middle}?`)){
      start = middle;
      middle = Math.ceil((start + end) / 2);
    } else {
      end = middle;
      middle = Math.floor((start + end) / 2);
    }
  }
} */