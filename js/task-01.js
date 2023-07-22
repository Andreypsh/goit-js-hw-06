const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.children.length}`);

const title = [...list.children].forEach((item) => {
  const category = item.firstElementChild.textContent;
  const element = item.lastElementChild.children.length;
  console.log(`Category: ${category} \nElements: ${element} `);
});
