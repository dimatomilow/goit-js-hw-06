function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const randomColor = document.querySelector(".widget");
const spanColor = document.querySelector(".color");
const body = document.body;




randomColor.addEventListener("click", changeColorClick);

function changeColorClick(event) {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
   if (!event.target.classList.contains(".change-color")) {
    return;
 }

}
