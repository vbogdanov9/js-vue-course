let res;

// 3. Дан объект:

let user = {
  guid: "dd969d30-841d-436e-9550-3b0c649e4d34",
  isActive: false,
  balance: "$2,474.46",
  age: 30,
  eyeColor: "blue",
  name: "Tameka Maxwell",
  gender: "female",
  company: "ENOMEN",
  email: "tamekamaxwell@enomen.com",
  phone: "+1 (902) 557-3898",
  tags: ["aliquip", "anim", "exercitation", "non"],
  friends: [
    {
      id: 0,
      name: "Barber Hicks",
    },
    {
      id: 1,
      name: "Santana Cruz",
    },
    {
      id: 2,
      name: "Leola Cabrera",
    },
  ],
};

// Используя деструктуризацию получить значения из следующих полей
// 1. name,  balance, email
// 2. из массива tags получить первый и последний элемент
// 3. из массива friends получить значение поле name из первого элемента массива
// Если какое то из полей не имеет значения то подставить значение по умолчанию.

// мое решение:
// let { name: uName = "default", balance = "default", email = "default" } = user;
// console.log(uName, balance, email);
// let { tags  = ['defaul','default']} = user;
// console.log(tags[0], tags.at(-1));
// let { friends: [{name: friendName = 'default'}] } = user;
// console.log(friendName);
// let {
//   name: uName = "default",
//   balance = "default",
//   email = "default",
//   tags = ["defaul", "default"],
//   friends: [{ name: friendName = "default" }],
// } = user;

// console.log(uName, balance, email, tags[0], tags.at(-1), friendName);

// решение препода:
const {
  name: uName = "",
  email = "",
  balance = "",
  tags: [firstTag = "", , , lastTag = ""] = [],
  friends: [{ name: friendName = "" }] = [],
} = user;

console.log(uName, balance, email, firstTag, lastTag, friendName);

//======================================
//4. С помощью оператора rest, из объекта user (из предыдущей задачи) скопировать в новый массив значение следующих полей tags и friends.

// решение препода

const newArr = [...user.tags, ...user.friends];
let deepCopyObj = JSON.parse(JSON.stringify(newArr));
console.log("newArr[4] = ", newArr[4]);
console.log(
  `(до присваивания)deepCopyObj = `,
  deepCopyObj,
  `\n(до присваивания)deepCopyObj[4].name = `,
  deepCopyObj[4].name
);
//при изменении этого обюъекта оригинальный  user не затрагивается.
deepCopyObj[4].name = "seva";
console.log(
  `(после присваивания deepCopyObj[4].name = "seva"; \ndeepCopyObj = `,
  deepCopyObj,
  `\ndeepCopyObj[4].name = `,
  deepCopyObj[4].name
);

console.log("(после присваивания)deepCopyObj = ", deepCopyObj);
console.log("newArr = ", newArr);
console.log("user = ", user);

// ==============================================
// 2. Организовать функцию getInfo, которая принимает объект вида
// { name: ...,  info: { employees: [...], partners: [ … ]  } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

const organisation = {
  name: "Google",
  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", "Facebook", "Xing"],
  },
};

// getInfo(organisation); →
// Name: Google
// Partners: Microsoft Facebook

// мое решение
// function getInfo({
//   name = "Unknown",
//   info: { partners: [partner1 = "", partner2 = ""] = [] } = {},
// } = {}) {
//   console.log(`Name: ${name} \nPartners: ${partner1} ${partner2}`);
// }

// решение препода:
function getInfo({
  name = "Unknown",
  info: { partners: [first = "none", second = "none"] = [] } = {},
} = {}) {
  console.log(`Name: ${name}`);
  console.log(`Partners: ${first} ${second}`);
}

getInfo(organisation);
getInfo();

//=========================================
// 1.Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

// мое решение
// function returnArgs() {
//   let [first, ...other] = arguments;
//   return {
//     first,
//     other
//   }
// }

// решение препода 1
//  function returnArgs(first, ...other) {
//    return {
//      first,
//      other,
//    };
//  }

// решение препода 2
const returnArgs = (first, ...other) => ({ first, other });

res = console.log(returnArgs(2, 3, 5, 6));

res = returnArgs("a", "b", "c", "d");
console.log(res);

// func(‘a’, ‘b’, ‘c’, ‘d’) →
// {
//   first: ‘a’,
//   other: [‘b’, ‘c’, ‘d’]
// }

user = {
  firstName: "Denis",
  lastName: "Mescheryakov",
  age: 25,
  info: {
    work: "EasyCode",
    skills: ["html", "css"],
  },
};

// const firstName = user.firstName;
// const lastName = user.lastName;

// const { firstName: name, lastName, age: years = 30 } = user;
// const {
//   info: { work, skills },
// } = user;
// console.log(skills);

const colors = ["white", "black", "red", "#89432d"];
const [w, b, red, green = "green"] = colors;
// console.log(w, b, red, green);
const names = ["Denis", "Ivan", "Maksim"];
const [name1, ...otherNames] = names;
console.log(name1, otherNames);
const nestedArr = ["hello world", ["key", "value"]];
const [, [key, value]] = nestedArr;
// console.log(key, value);
// const [...newNames] = names;
const newNames = [...names];
// console.log(...newNames);
const colorNames = ["some value", ...colors, ...names];
// console.log(colorNames);
const newUser = { ...user, age: 30 };
console.log(newUser);
const {
  info: {
    skills: [html, css],
  },
} = newUser;

// console.log(html, css);

function myPerson({
  lastName = "&",
  firstName = "&",
  info: { skills } = {},
} = {}) {
  console.log(skills);
}

// myPerson(newUser);
function foo(x, y, ...others) {
  console.log(arguments);
  // console.log(Array.prototype.slice.call(arguments));
  const [...args] = arguments;
  console.log(others);
}

// foo(1, 2, 5, 6);
const numbers = [2, 3];

function foo2(x, y) {
  console.log(x, y);
}

foo2(...numbers);
