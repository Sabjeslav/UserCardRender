const imageDB = [
  "https://www.w3schools.com/bootstrap/chicago.jpg",
  "https://www.w3schools.com/bootstrap/ny.jpg",
  "https://www.w3schools.com/bootstrap/la.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
];

const slider = new Slider(imageDB);

const slideImage = document.querySelector(".slide");
const container = document.querySelector(".image-container");
const [prevButton, nextButton] = document.querySelectorAll(
  ".slider-container > button"
);

const strAttr = document.createAttribute("src");
slideImage.setAttributeNode(strAttr);

const updateView = (imgLink) => {
  strAttr.value = imgLink;
};

updateView(slider.currentSlide);

const createButtonHandler = (action = "next") => () => {
  updateView(slider[action]());
};

prevButton.addEventListener("click", createButtonHandler("prev"));
nextButton.addEventListener("click", createButtonHandler("next"));

const [btn1, btn2] = document.querySelectorAll('.buttons');

const btnHandler = () => {
  [btn1.innerText, btn2.innerText] = [btn2.innerText, btn1.innerText];
};

btn1.addEventListener("mouseenter", btnHandler);
btn2.addEventListener("mouseenter", btnHandler);

// btn2.addEventListener('mouseover', ()=>{

// })
// btn1.addEventListener('mouseover', ()=>{
//   let temp = btn2.textContent;
//   btn2.textContent = btn1.textContent;
//   btn1.textContent = temp;
// })
