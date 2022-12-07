const message = "Category:";
const value = "Elements :";

const docDom = document.querySelectorAll(".item");
const tittle = document.querySelectorAll("h2");

const listEl = document.querySelectorAll(".item");

const CategoryFirst = listEl[0].querySelectorAll("li");
const CategorySecond = listEl[1].querySelectorAll("li");
const CategoryLast = listEl[2].querySelectorAll("li");

console.log("Number of categories:", docDom.length);

console.log(message, tittle[0].textContent);
console.log(value, CategoryFirst.length);

console.log(message, tittle[1].textContent);
console.log(value, CategorySecond.length);

console.log(message, tittle[2].textContent);
console.log(value, CategoryLast.length);
