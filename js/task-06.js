const input = document.querySelector("#validation-input");
const inputLength = Number(input.dataset.length);

input.addEventListener("blur", onInputBlur);
function onInputBlur(event) {
  const onInputValue = event.currentTarget.value.length;
  if (onInputValue === inputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
