const input = document.querySelector("#name-input");
const nameSpan = document.querySelector("#name-output")

input.addEventListener("input", onInput)


function onInput(event) {
    console.log(event.currentTarget.value);
    nameSpan.textContent = event.currentTarget.value;
 }