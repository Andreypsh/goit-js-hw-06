const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  console.dir(formElements);
  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };
  if (mail.length <= 0 || password.length <= 0) {
    return alert("Всі поля повинні бути заповнені");
  }

  console.log(formData);

  event.target.reset();
}
