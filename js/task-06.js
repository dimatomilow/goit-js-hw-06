const input = document.querySelector("#validation-input")
const inputAtribbuteLength = input.getAttribute("data-length")



input.addEventListener("blur", onInputBlur)


function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(inputAtribbuteLength)) {
        event.currentTarget.classList.replace("invalid", "valid");
    } else {
        event.currentTarget.classList.add("invalid");

    }

}

