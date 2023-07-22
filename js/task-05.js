const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  const addName = event.currentTarget.value;
  if (addName.length <= 0) {
    output.textContent = "Anonymous";
    return;
  }
  return (output.textContent = addName);
}
