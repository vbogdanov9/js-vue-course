// 1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.

const btn = document.getElementById("btn-msg");
btn.addEventListener("click", (e) => {
  // console.log(
  //   e,
  //   "e.target = ",
  //   e.target,
  //   e.target.dataset,
  //   e.target.dataset.text
  // );
  // console.log("(btn === e.target) = ", btn === e.target);
  // console.log("(btn === e.currentTarget) = ", btn === e.currentTarget);
  // alert(e.target.dataset.text);
  // alert(btn.dataset.text);
  alert(e.currentTarget.dataset.text);
});

btn.addEventListener("click", function (e) {
  // alert(this.dataset.text);
  // console.log(this);
  // alert(this.dataset.text);
});

// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.
// btn.addEventListener("mouseover", (e) => btn.classList.add("bg-red"));
// btn.addEventListener("mouseout", (e) => btn.classList.remove("bg-red"));
btn.addEventListener("mouseout", (e) => btn.classList.toggle("bg-red"));
btn.addEventListener("mouseover", (e) => btn.classList.toggle("bg-red"));

// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.

const tagTextContainer = document.getElementById("tag");
document.body.addEventListener("click", (e) => {
  tagTextContainer.textContent = `Tag: ${e.target.nodeName}`;
});

// 4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д

const generateBtn = document.getElementById("btn-generate");
const list = document.querySelector("ul");

function generateNewItem() {
  const num = list.children.length + 1;
  const text = `Item ${num}`;
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

generateBtn.addEventListener("click", generateNewItem);
