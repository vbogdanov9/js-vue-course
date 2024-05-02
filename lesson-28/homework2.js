// Код к задаче здесь

// 6. Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none. При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно в тот  dropdown-item на котором произошел клик. При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться. При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться.

const dropdownItems = document.querySelectorAll(".dropdown-item");
let currentOpenedMenu = null;

console.log(dropdownItems);

function toggleDropdownMenu(e) {
  const menu = e.currentTarget.querySelector(".dropdown-menu");
  // console.log("e = ", e);
  // console.log("e.currentTarget = ", e.currentTarget);
  // console.log(
  //   'e.currentTarget.querySelector(".dropdown-menu") = ',
  //   e.currentTarget.querySelector(".dropdown-menu")
  // );
  // метод toggle возвращает булевое значение, если клас удален то вернет false а если добавлен то true. Это значение мы сохраняем в переменную
  const isAdded = menu.classList.toggle("d-none");
  // если в currentOpenedMenu уже есть блок и он не равен текущем menu то мы его скрываем
  if (currentOpenedMenu && currentOpenedMenu !== menu) {
    currentOpenedMenu.classList.add("d-none");
  }

  if (!isAdded) {
    currentOpenedMenu = menu;
  }
}
// Если класс d-none был удален то значет меню видимо и мы его сохраняем в переменную currentOpenedMenu
dropdownItems.forEach((d) => d.addEventListener("click", toggleDropdownMenu));
