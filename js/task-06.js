const inputJs = document.querySelector("#validation-input");

const dataLength = inputJs.dataset.length;

inputJs.addEventListener("blur", findCorrectValue);

function findCorrectValue(event) {
  if (event.currentTarget.value.length === +dataLength) {
    inputJs.classList.remove("invalid");
    return inputJs.classList.add("valid");
  } else {
    inputJs.classList.remove("vaild");
    return inputJs.classList.add("invalid");
  }
}
