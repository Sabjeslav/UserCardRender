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

updateView(slider.currentSlide);

const createButtonHandler = (action = "next") => () => {
  updateView(slider[action]());
};

prevButton.addEventListener("click", createButtonHandler("prev"));
nextButton.addEventListener("click", createButtonHandler("next"));

function updateView(imgLink) {
  container.setAttribute(
    "style",
    `background-image: url("${imgLink}"); background-size: cover; `
  );
}
