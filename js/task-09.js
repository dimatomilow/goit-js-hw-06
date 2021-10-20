function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorValue = document.querySelector(".color");
const body = document.body;
const button = document.querySelector(".change-color");

const randomColor = getRandomHexColor();

button.addEventListener("click", changeColorClick);

function changeColorClick() {
  body.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;

}
