const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayIngridients = document.querySelector("#ingredients");
const ingListJs = [];

for (let i = 0; i < ingredients.length; i++) {
  const listElem = document.createElement("li");

  listElem.classList.add("item");
  listElem.textContent = ingredients[i];
  ingListJs.push(listElem);
}
arrayIngridients.append(...ingListJs);
