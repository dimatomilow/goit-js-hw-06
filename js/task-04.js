const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);

const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);

const valueRef = document.querySelector("#value");



let counterValue = 0;

const increaseByOne = () => {
  counterValue -= 1;
  return (valueRef.textContent = counterValue);
};
const reduceByOne = () => {
  counterValue += 1;
  return (valueRef.textContent = counterValue);
};

btnDecrementRef.addEventListener("click", increaseByOne);
btnIncrementRef.addEventListener("click", reduceByOne);
