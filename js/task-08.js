const formJs = document.querySelector(".login-form");

formJs.addEventListener("submit", onManageSubmit);

function onManageSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    const userData = {
      email: `${email.value}`,
      password: `${password.value}`,
    };
    event.currentTarget.reset();
    console.log(userData);
  }
}
