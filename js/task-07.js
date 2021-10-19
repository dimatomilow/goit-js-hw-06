const fontSizeControl = document.querySelector("#font-size-control")
const textEl = document.querySelector("#text")

fontSizeControl.addEventListener("input",controlWidth)

// function controlWidth(event) {
//    textEl.textContent = event.currentTarget.value + "px";
//     console.log(textEl)
// }
function controlWidth(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
     console.log(textEl)
 }