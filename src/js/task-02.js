const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayIngridients = document.querySelector("#ingredients");

for (let i = 0; i <= 5; i++) {
  let listElem = document.createElement("li");

  listElem.classList.add("item");
  listElem.textContent = ingredients[i];
  arrayIngridients.appendChild(listElem);
}
