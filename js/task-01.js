const navEl =  document.querySelector("#categories")

const itemsEl = document.querySelectorAll(".item")
console.log("Number of categories :", itemsEl.length)


itemsEl.forEach(element => {
    const title = element.querySelector("h2");
    console.log("Category:",title.innerHTML)
    const liItem = element.querySelector("li");

    console.log("Elements:",liItem.innerHTML.length)
})


