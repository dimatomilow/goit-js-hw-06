const input = document.querySelector("#name-input");
const nameSpan = document.querySelector("#name-output")

input.addEventListener("input", onInput)


function onInput() {
    if (input.value === "") {
return nameSpan.textContent = "Anonymous"
}

   return nameSpan.textContent = input.value;
 }