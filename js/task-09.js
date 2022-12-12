function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyJs = document.querySelector("body");
const btnJs = document.querySelector(".change-color");
const spanJs = bodyJs.querySelector(".color");

btnJs.addEventListener("click", changeBackground);

function changeBackground() {
  spanJs.textContent = bodyJs.style.backgroundColor = getRandomHexColor();
}
