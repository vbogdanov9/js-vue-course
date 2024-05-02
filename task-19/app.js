const users = [
  {
    _id: "5d220b10e8265cc978e2586b",
    isActive: true,
    balance: 2853.33,
    age: 20,
    name: "Buckner Osborne",
    gender: "male",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
    nestedField: { total: 300 },
  },
  {
    _id: "5d220b10144ef972f6c2b332",
    isActive: true,
    balance: 1464.63,
    age: 38,
    name: "Rosalie Smith",
    gender: "female",
    company: "KATAKANA",
    email: "rosaliesmith@katakana.com",
    phone: "+1 (943) 463-2496",
    registered: "2016-12-09T05:15:34 -02:00",
    nestedField: { total: 400 },
  },
  {
    _id: "5d220b1083a0494655cdecf6",
    isActive: false,
    balance: 2823.39,
    age: 40,
    name: "Estrada Davenport",
    gender: "male",
    company: "EBIDCO",
    email: "estradadavenport@ebidco.com",
    phone: "+1 (890) 461-2088",
    registered: "2016-03-04T03:36:38 -02:00",
    nestedField: { total: 200 },
  },
];

const tableSchema = {
  index: "#",
  name: "Name",
  email: "Email",
  balance: "Balance",
  // isActive: 'Активен',
};

let currentSortMethod = "По умолчанию";
const ascending = "По возрастанию";
const descending = "По убыванию";
const sortButton = document.querySelector(".btn.btn-primary.btn-sort");
const displaySortMethod = document.querySelector("span.sort-method");

sortButton.addEventListener("click", (e) => {
  let arrow = "";

  if (currentSortMethod !== ascending) {
    users.sort((a, b) => {
      return a.balance - b.balance;
    });
    currentSortMethod = ascending;
    arrow = "fa-arrow-down";
  } else if (currentSortMethod === ascending) {
    users.sort((a, b) => {
      return b.balance - a.balance;
    });
    currentSortMethod = descending;
    arrow = "fa-arrow-up";
  }

  // Перерисовка кнопки со стрелкой
  const iTag = document.createElement("i");
  iTag.classList.add("fa-solid");
  iTag.classList.add(arrow);
  // console.log(arrow);
  // console.log("iTag = ", iTag);
  if (!sortButton.childNodes[1]) {
    sortButton.childNodes[0].textContent = "Сортировка  ";
    sortButton.appendChild(iTag);
  } else sortButton.childNodes[1].replaceWith(iTag);

  // перерисовка таблицы
  const currentTbody = document.querySelector("tbody");
  const newTbody = generateTbody(tableSchema, users);
  currentTbody.replaceWith(newTbody);

  // перрерисовка пояснения
  displaySortMethod.textContent = currentSortMethod;
});

function generateTableTemplate() {
  const table = document.createElement("table");
  table.classList.add("table");
  return table;
}

function generateTr(tableSchema, tagName = "td") {
  const tr = document.createElement("tr");
  Object.values(tableSchema).forEach((val) => {
    const td = document.createElement(tagName);
    td.textContent = val;
    tr.appendChild(td);
  });
  return tr;
}

function generateThead(tableSchema) {
  const thead = document.createElement("thead");
  const tr = generateTr(tableSchema, "th");
  thead.appendChild(tr);
  return thead;
}

function generateItemsSchema(tableSchema, item) {
  const itemSchema = Object.keys(tableSchema).reduce((acc, key) => {
    // console.log("item = ", item);
    // console.log("key = ", key);
    // console.log("(key in item) = ", key in item);
    // console.log("item[key] = ", item[key]);
    if (key in item) {
      acc[key] = item[key];
    }
    // console.log("acc = ", acc);
    return acc;
  }, {});
  return itemSchema;
}

function generateTbody(tableSchema, items) {
  const tbody = document.createElement("tbody");
  items.forEach((item, index) => {
    // console.log("index = ", index);
    // console.log("item = ", item);
    // console.log("item.index = ", item.index);
    item.index = index + 1;
    // console.log("item.index = ", item.index);
    const itemSchema = generateItemsSchema(tableSchema, item);
    // console.log("itemSchema = ", itemSchema);
    const tr = generateTr(itemSchema, "td");
    // console.log("tr = ", tr);
    tbody.appendChild(tr);
    // console.log("tbody = ", tbody);
  });
  // console.log("tbody = ", tbody);
  // console.log("tableSchema = ", tableSchema);
  // console.log("items = ", items);
  // const total = generateTotalBalance(tableSchema, items);
  // tbody.appendChild(total);

  return tbody;
}

function generateTotalBalance(tableSchema, items) {
  const total = items.reduce((acc, item) => acc + parseFloat(item.balance), 0);
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const columnCounts = Object.keys(tableSchema).length;
  // console.log("total = ", total);
  // console.log("columnCounts = ", columnCounts);
  td.insertAdjacentHTML("beforeend", `Total balance: <b>${total}</b>`);
  td.setAttribute("colspan", columnCounts);
  td.setAttribute("align", "right");
  tr.appendChild(td);
  // console.log("tr = ", tr);
  // console.log("td = ", td);
  return tr;
}

function initTable(tableSchema, items) {
  const tableContainer = document.querySelector(".table-container");
  const table = generateTableTemplate();
  const header = generateThead(tableSchema);
  const body = generateTbody(tableSchema, items);
  const total = generateTotalBalance(tableSchema, items);
  table.appendChild(header);
  table.appendChild(body);
  table.appendChild(total);
  // container.appendChild(pageTitle);

  tableContainer.appendChild(table);

  // console.log("container = ", container);
  // console.log("table = ", table);
  // console.log("header = ", header);
  // console.log("body = ", body);
  // console.log("total = ", total);
}

initTable(tableSchema, users);
