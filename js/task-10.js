function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divForm = document.querySelector("#controls");
const inputValue = divForm.children[0];
const createBtn = divForm.children[1];
const destroyBtn = divForm.children[2];
const creatboxes = document.querySelector("#boxes");
let creatValue;

inputValue.addEventListener("input", onInputValue);

function onInputValue(event) {
  const value = event.currentTarget.value;
  creatValue = value;
  return creatValue;
}

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    console.log(i);
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width += i * 10 + 20 + "px";
    div.style.height += i * 10 + 20 + "px";
    div.innerHtml = i;
    creatboxes.append(div);
  }
}

createBtn.addEventListener("click", onCreateBtn);

function onCreateBtn(event) {
  createBoxes(creatValue);
}

destroyBtn.addEventListener("click", onDestroyBtn);

function onDestroyBtn(event) {
  creatboxes.innerHTML = "";
}
