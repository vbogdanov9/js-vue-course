let div = document.querySelector("div");
const titles = document.querySelectorAll("h1");
const h1 = document.getElementsByTagName("h1");
// console.dir(h1);
// console.log(titles);
// console.log(Array.from(titles));
// console.log(Array.prototype.slice.call(titles));
// console.log([...titles]);

// document.body.style.background = 'red'; // сделать фон красным

// setTimeout(() => document.body.style.background = '', 3000); // вернуть назад

// задания:
// 1. Зная структуру html, с помощью изученных
// методов получить (в консоль):
// 1. head
//решение препода
// console.log(document.head);

// console.log(document.querySelector("head"));
// console.log(document.getElementsByTagName("head")[0]);
// 2. body
// console.log(document.body);
// 3. все дочерние элементы body и вывести их в
// консоль.
// console.log(document.body.children);

// 4. первый div и все его дочерние узлы
// мое
// console.log(document.querySelector("div"));

// console.log(document.body.firstElementChild);
// а) вывести все дочерние узлы в консоль
// console.log(document.body.firstElementChild.children);

// for (let elem of document.body.firstElementChild.children) {
//   console.log(elem);
// }
// for (let elem of firstDiv.childNodes) {
//   console.log("firstDiv.childNodes(elem) = ", elem);
// }
// text = '';
// document.querySelector("div").childNodes.forEach(function (node, index) {
//    text+=node;
//    console.log(index, node, text);
// });
// console.log(text)

// б) вывести в консоль все дочерние узлы,
// кроме первого и последнего
// Для навигации по DOM использовать методы,
// которые возвращают только элементы

div = document.body.firstElementChild;
// При помощи оператора ... мы получаем из коллекции массив который фильтруем сравнивая каждый элемент с первым и последним элементом в div.
let filteredArticles;
// пример препода
filteredArticles = [...div.children].filter(
  (p) => p !== div.firstElementChild && p !== div.lastElementChild
);
// console.log(filteredArticles);

// filteredArticles = [...div.children].filter(
//   (p, index, arr) => index !== 0 && index !== arr.length
// );
// console.log(filteredArticles);

// filteredArticles = [];
// for (let elem of div.children) {
//   filteredArticles.push(elem);
// }
// console.log(filteredArticles);
// filteredArticles = filteredArticles.slice(1, -1);
// console.log(filteredArticles);

//===============
//===============

// 2. Дана разметка.

// Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// // true так как первый див является родительским элементом для mark
// isParent(document.querySelector('ul'), document.querySelector('mark'));
// // false так ul НЕ является родительским элементом для mark
// Функция принимает только DOM объекты. Обязательно проверяйте это.
// Разбор данной задачи есть в "Разбор домашних заданий DOM Часть №1"

function isParent(parent, child) {
  // Проверяем, что переданные элементы являются HTML элементами
  if (!(parent instanceof HTMLElement) || !(child instanceof HTMLElement))
    return;
  let isParent = false;
  let currentParent = child.parentElement;

  while (currentParent) {
    // console.log("currentParent = ", currentParent);
    isParent = currentParent === parent;
    if (isParent) {
      break;
    }
    currentParent = currentParent.parentElement;
  }
  return isParent;
}

// let testParent = document.body.children[0];
let testParent = document.body;
let testChild = document.querySelector("mark");
// isParent(testParent, testChild);

// console.log("testParent = ", testParent);
// console.log("testChild = ", testChild);
// console.log(
//   "isParent(testParent, testChild) = ",
//   isParent(testParent, testChild)
// );

// 3. Используя разметку из предыдущего задания.
// Получить список всех ссылок, которые не находятся внутри списка ul.

const filteredLinks = [...document.links].filter((a) => !a.closest("ul"));
// console.log(filteredLinks);

// 4. Используя разметку из предыдущего задания.
// Найти элемент, который находится перед и после списка ul.

const ul = document.querySelector("ul");
const prev = ul.previousElementSibling;
const next = ul.nextElementSibling;
console.log(prev);
console.log(ul);
console.log(next);
