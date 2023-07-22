function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const getColor = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  const onRandomCol = getRandomHexColor();
  document.body.style.backgroundColor = onRandomCol;
  getColor.textContent = onRandomCol;
}
