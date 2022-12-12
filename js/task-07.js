const inputJs = document.querySelector("#font-size-control");
const spanJs = document.querySelector("#text");

inputJs.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  spanJs.style.fontSize = event.currentTarget.value + "px";
}
