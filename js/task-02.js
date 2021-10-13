const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const elements = ingredients.map(ingr => {
  const liEl = document.createElement("li");
  liEl.textContent = ingr;
  liEl.classList.add("item");
  return liEl;
})


const ingredientsEl = document.querySelector("#ingredients");

ingredientsEl.append(...elements);
console.log(ingredientsEl);