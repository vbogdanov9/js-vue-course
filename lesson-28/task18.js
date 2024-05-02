// Вот массив (список) рандомных цветов
// ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
const colors = [
  "red",
  "blue",
  "olive",
  "orange",
  "pink",
  "yellow",
  "green",
  "gray",
  "aqua",
  "brown",
];

// 1. При наведении на любой из блоков с классом .box все его дочерние элементы должны поменять свой фон на один из списка. ВАЖНО, только дочерние относительно блока на который навели мышь.

// 2. Возращаете фон обратно когда пользователь уводит мышку с блока.

// 3. Добавление фона из первой части задания сделать с задержкой в 200мс. Т.е каждый последующий блок должен изменить свой фон за 200мс позже предыдущего. Например если первый блок поменял через 200мс то следующий должен поменять через 400 и т.д.

function setRandomColor(el) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  // console.log(el);
  el.style.background = randomColor;
}

function resetColor(el) {
  el.style.background = "";
}

function onBoxHover(e) {
  // console.log("e = ", e);
  // Создаем массив элементов которые будут менять фон.
  let elements = [e.currentTarget];
  // console.log("elements = [e.currentTarget] = ", elements);
  // let parentEl = e.target.parentNode;
  // console.log(parentEl.style.background);
  // if (parentEl.style.background != "") resetColor(parentEl);

  let currentEl = e.currentTarget;
  // console.log("currentEl = e.currentTarget = ", currentEl);

  // Проходимся циклом по всем дочерним элементам до самого последнего

  while (currentEl) {
    // elements.push(currentEl.children[0]);
    elements = [...elements, ...currentEl.children];
    // console.log("elements = [...elements, ...currentEl.children]", elements);

    // console.log("currentEl.children.length = ", currentEl.children.length);

    currentEl = currentEl.children[currentEl.children.length - 1];
    // console.log(
    //   "currentEl = currentEl.children[currentEl.children.length - 1] = ",
    //   currentEl
    // );
  }
  elements.forEach((el, index) =>
    setTimeout(setRandomColor, 200 * (index + 1), el)
  );

  // alert();
}

function onMouseLeave(e) {
  resetColor(e.currentTarget);
}

document
  .querySelectorAll(".box")
  .forEach((box) => box.addEventListener("mouseenter", onBoxHover));
document
  .querySelectorAll(".box")
  .forEach((box) => box.addEventListener("mouseleave", onMouseLeave));
