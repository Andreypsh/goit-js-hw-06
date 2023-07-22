const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const title = document.querySelector("#ingredients");

const addLi = (ingredients) => {
  return ingredients.map((ingradient) => {
    const li = document.createElement("li");
    li.classList.add("item");
    li.textContent = ingradient;
    return li;
  });
};
const elements = addLi(ingredients);
title.append(...elements);
