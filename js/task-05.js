const inputJs = document.querySelector("#name-input");
console.log(inputJs);

const spanJs = document.querySelector("#name-output");
console.log(spanJs);

inputJs.addEventListener("input", (event) => {
  if (inputJs.value === "") {
    spanJs.textContent = "Anonymous";
  } else {
    spanJs.textContent = event.currentTarget.value;
  }
});
