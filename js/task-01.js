const navEl =  document.querySelector("#categories")

const liItemEl = navEl.querySelectorAll("li.item")
console.log("Number of categories :", liItemEl.length)

const firstEl = navEl.firstElementChild;

const h2Item1El = firstEl.firstElementChild;
console.log("Category:", h2Item1El.textContent);

const lastUl1El = firstEl.lastElementChild;

const lastUl1LiEl = lastUl1El.querySelectorAll("li");
console.log("Elements:",lastUl1LiEl.length);



const liItem2El = navEl.children[1];

const h2Item2El = liItem2El.firstElementChild;
console.log("Category:", h2Item2El.textContent);

const lastUl2El = liItem2El.lastElementChild;

const lastUl2LiEl = lastUl2El.querySelectorAll("li");
console.log("Elements:",lastUl2LiEl.length);



const liItem3El = navEl.lastElementChild;


const h2Item3El = liItem3El.firstElementChild;
console.log("Category:", h2Item3El.textContent);

const lastUl3El = liItem3El.lastElementChild;

const lastUl3LiEl = lastUl3El.querySelectorAll("li");
console.log("Elements:",lastUl3LiEl.length);