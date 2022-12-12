const inputJs = document.querySelector("#name-input");
const spanJs = document.querySelector("#name-output");

inputJs.addEventListener("input", (event) => {
  if (inputJs.value === "") {
    spanJs.textContent = "Anonymous";
  } else {
    spanJs.textContent = event.currentTarget.value;
  }
});
