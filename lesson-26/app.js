const div = document.querySelector("div");
// const titles = document.querySelectorAll('h1');
// const h1 = document.getElementsByTagName('h1');
// console.dir(h1);
// console.log(titles);
// console.log(Array.from(titles));
// console.log(Array.prototype.slice.call(titles));
// console.log([...titles]);

// console.log(div.parentElement);

let link = div.querySelector(".link");
// console.log(link.parentElement);
// console.log(link.closest('.content'));

div.classList.add("article", "custom");
div.classList.remove("article");
// div.classList.contains('custom');
// div.classList.toggle("toggle")
// console.dir(link);

div.setAttribute("id", "myId");
// div.removeAttribute("id")
// div.getAttribute("id")
// div.hasAttribute("id")

// div.dataset.myattr

// *Манипуляция DOM
const title = document.querySelector("h1");
// title.innerHTML = '<span>text</span>';
// title.textContent = '<span>new text</span>';
// title.appendChild('<span>appen</span>');
// title.insertAdjacentHTML('beforebegin', '<h2>title h2</h2>');
// title.insertAdjacentElement

// title.innerHTML += '<span>new text</span>';
// const span = title.querySelector('span');
// console.log(span);
// title.innerHTML += '<span>new text2</span>';
// span.innerHTML = 'asdasd';

// *Создание элемента
const span = document.createElement("span");
span.textContent = "span created by createElement";
span.classList.add("myClass");
// console.log(span);
// title.appendChild(span);

// div.appendChild(span);
const fragment = document.createDocumentFragment();
const colors = ["black", "yellow", "orange"];
colors.forEach((color) => {
  const item = document.createElement("div");
  item.classList.add(`bg-${color}`);
  item.style.background = color;
  item.textContent = color;
  fragment.appendChild(item);
});

document.body.appendChild(fragment);

// *Удаление элементов
// title.remove()
// title.parentElement.removeChild(title)

// дз1 :

// 1. Найти параграф и получить его текстовое содержимое (только текст!)

const p = document.querySelector("p");
// console.log(p.innerText);
// console.log(p.textContent);

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

function getNodeInfo(node) {
  if (!(node instanceof Element)) return;

  return {
    nodeType: node.nodeType,
    tagName: node.tagName,
    childNodes: node.childNodes.length,
  };
}

const info = getNodeInfo(p);
// console.log(info);

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

let list = document.querySelector("ul");

function getTextFromUl(ul) {
  if (!(ul instanceof HTMLElement)) return;
  // console.log(ul.querySelectorAll("a"));
  const [...links] = ul.querySelectorAll("a") || [];
  // console.log(links);
  return links.map((a) => a.textContent);
}

// console.log(list);
// console.log(getTextFromUl(list));

// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

const [...pChildNodes] = document.querySelector("p").childNodes;
// console.log(document.querySelector('p').childNodes);
// console.log(pChildNodes);

// pChildNodes.forEach (child => {
//   if (child.nodeType === 3) {
//     child.textContent = '-text-'
//   }
// })

//дз2:
// 1. Найти в коде список ul и добавить класс “list”
// решение через селектор ~ :
// const ul = document.querySelector("ul");
// ul.classList.add("list");
// document.querySelector("ul").classList.add("list");

// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link

// link = document.querySelector('ul ~ a');
// link.id = 'link';
// console.log(link);

//через цикл while
list = document.querySelector("ul");
link = undefined;
let nextElement = list.nextElementSibling;

while (!link || !nextElement) {
  // console.log(nextElement, link, nextElement.tagName);
  if (!nextElement) break;
  if (nextElement.tagName === "A") {
    link = nextElement;
  }
  nextElement = nextElement.nextElementSibling;
  // console.log(!link, !nextElement, (!link || !nextElement));
}

// console.log(link);

// 3. На li через один (начиная с самого первого) установить класс “item”
// первый вариант
// const [...liN2] = document.querySelectorAll('li:nth-child(odd)')
// liN2.forEach(li => li.classList.add('item'));

// второй вариант
// const [...allLi] = document.querySelectorAll("li");
// allLi.forEach((li, index) => {
//   if (!(index % 2)) {
//     li.classList.add("item");
//   }
// });

// 4. На все ссылки в примере установить класс “custom-link”
let [...links] = document.links;
links.forEach((link) => link.classList.add("custom-link"));

// Код для задач брать со слайда 4.

// дз3

// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
// <ul>
// <li><a href="#">Link1</a></li>
// ...
// <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.
// Код для задач брать со слайда 4.

list = document.querySelector("ul");
const currentCounts = list.children.length;
const newLiCounts = 3;

for (let i = 0; i < newLiCounts; i++) {
  let li = document.createElement("li");
  li.classList.add("new-item");
  li.textContent = `item ${currentCounts + i + 1}`;
  list.appendChild(li);
}

// 2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong).

[...links] = document.querySelectorAll("ul a");
links.forEach((link) =>
  link.insertAdjacentHTML("beforeend", "<strong>Strong</strong>")
);

// console.log(links);

// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.

//"src = https://vbogdanov9.github.io/oksana/src/images/oksana_2.jpg"

const img = document.createElement("img");
img.setAttribute("src", "https://via.placeholder.com/150/92c952");
img.setAttribute("alt", "some image");
document.body.insertAdjacentElement("afterbegin", img);

// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green

const mark = document.querySelector("mark");
mark.insertAdjacentText("beforeend", "green");
mark.classList.add("green");

// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)

list = document.querySelector("ul");
const listItems = [...list.children];
// console.log(list);
// console.log(list.children);
// console.log(listItems);
listItems.sort((prev, next) => {
  // console.log("prev.textContent =", prev.textContent);
  // console.log("next.textContent =", next.textContent);
  // console.log(
  //   "(prev.textContent > next.textContent) =",
  //   prev.textContent > next.textContent
  // );
  return prev.textContent > next.textContent ? -1 : 1;
});
// console.log(listItems);
// console.log(list.innerHTML);
list.innerHTML = "";
// console.log(list.innerHTML);
listItems.forEach((item) => list.appendChild(item));
console.log(list);

// Код для задач брать со слайда 4.

// 6. ВАЖНО. ДАННОЕ ЗАДАНИЕ ВЫПОЛНЯЙТЕ ПОСЛЕ ПРОЕКТА TODO.
// Дан массив пользователей, его можно скопировать отсюда  (https://easycodeua.notion.site/8e2b70ab692a4986b1816ce7dd2fb1ca) из первой задачи, создать таблицу вида:

// Условия:
// В конце таблицы обязательно последняя tr должна содержать total balance всех пользователей из таблицы при этом он должен быть всегда выровнен по правому краю.
// Количество пользователей может быть любым.
// Таблица и все ее содержимое должно создаваться через js, в разметке у вас может быть только контейнер.
// В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков th которые будут выводиться в таблице. Что то типа { name: ‘Name’, email: ‘Email’... } соответственно ключ объекта это ваше поле которое вы хотите вывести из объекта пользователя а значение это заголовок th.
