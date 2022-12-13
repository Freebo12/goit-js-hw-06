const buttonjs = document.querySelectorAll("button");

buttonjs.forEach(function (btn) {
  btn.addEventListener("click", onButtonClick);

  function onButtonClick() {
    const action = this.dataset.action;
    const spanJs = document.querySelector("#value");

    const currentValue = spanJs.textContent;
    let counterValue = 0;

    if (action === "increment") {
      for (let i = 0; i < 2; i++) {
        counterValue = +currentValue + +i;
      }
    } else {
      counterValue = currentValue - 1;
    }
    return (spanJs.textContent = counterValue);
  }
});
