const input = document.querySelector("#name-input");
const nameSpan = document.querySelector("#name-output")

input.addEventListener("input", onInput)


function onInput(event) {
    nameSpan.textContent = event.currentTarget.value;
 }