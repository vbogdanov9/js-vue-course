// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

// let value = `hidden`;

// if (value == `hidden`) {
//   value =  'visible';
// } else {
//   value = `hidden`;
// }

// console.log(value);

//2. Используя if, записать условие:
//  если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

// let value = 3;
// if (value == 0) {
//   value =  1;
// } else if (value<0) {
//   value = `less then zero`;
// } else if (value>0) {
//   value*=10;
// }
// console.log(value);

// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
// let car = { name: 'Lexus', age: 2, create: 2008, needRepair: true };
//  if (car.age>5) {
//   console.log('Need Repair');
//   car.needRepair = true;
//  } else {
//   car.needRepair = false;
//  }
//  console.log(car);

// 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

// let item = { name: 'Intel core i7', price: '100$', discount: 's%' };

// let floatPrice = parseFloat(item.price), floatDiscount = parseFloat(item.discount);

// // console.log(item.discount, floatDiscount);

// if ((floatPrice>0) && (floatDiscount>0)) {
//   let floatPriceWithDiscount = floatPrice*(100-floatDiscount)/100;
//   item.priceWithDiscount = +floatPriceWithDiscount.toFixed(2) + '$';
//   console.log('item.priceWithDiscount = ' , item.priceWithDiscount);
// } else if ((floatDiscount<=0) || Number.isNaN(floatDiscount)) {
//   console.log('item.price = ' , item.price);};

// console.log(item);

// 5. Дан следующий код:

// let product = {
//     name: "Яблоко",
//     price: "15$",
// };

// let min = 10; // минимальная цена
// let max = 20; // максимальная цена

// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

// let floatPrice = parseFloat(product.price);
// if ((floatPrice>=min) && (floatPrice<=max)) {
//   console.log(product.name);
// } else {console.log('товаров не найдено');}

// Циклы:
// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре. Использовать for или while.

let string = `i am in the easycode`,
  currentChar = "",
  res = "";
currentChar = string[0].toUpperCase();
res = res + currentChar;

for (let i = 1; i < string.length; i++) {
  if (string[i - 1] == " ") {
    currentChar = string[i].toUpperCase();
  } else {
    currentChar = string[i];
  }
  res += currentChar;
}
// console.log(res);

//===================================================================
// задачи на функции

// 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

// function multiply() {
//   let arg;
//   let argcount = 0;
//   let sum = 1;
//   for (let i = 0; i < arguments.length; i++) {
//     arg = parseFloat(arguments[i]);
//     if (Number.isNaN(arg)) continue;
//     sum *= arg;
//     argcount++;
//     // console.log(i,arg,sum);
//   }
//   return argcount > 0 ? sum : 0;
// }

// console.log(multiply(2,4,'asd',5));

// 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

function guessTheNumber(num) {
  // let randomNum = Math.round((Math.random() *10+0.5));

  // random[randomNum]++;
  // my[num]++;
  if (num < 1 || num > 10)
    return new Error("Please provide number in range 1-10");

  if (typeof num !== "number")
    return new Error("Please provide a valid number");
  const randomNum = Math.trunc(Math.random() * 10 + 1);
  if (randomNum === num) {
    // mutch++;
    return `You win! ${num} of ${randomNum}`;
  } else {
    return `You are lose, your number is ${num}, the random number is ${randomNum}`;
  }
}

let i = 10;
// console.log(guessTheNumber(i));

// 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений. Данное задание выполните после того как познакомитесь с методами массивов:
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function changeCollection() {
  let arg;
  let res = [];
  for (let i = 0; i < arguments.length; i++) {
    // console.log("before arg.shift(); arguments[i]=", arguments[i]);
    arg = arguments[i].slice(); // если написать просто = arguments[i], то при изменении arg будет и зменяться и arguments[i]
    if (Array.isArray(arg)) {
      arg.shift();
      res.push(arg);
    }
    // console.log("after arg.shift(); arguments[i]=", arguments[i]);
  }
  return res;

  // const res = [];

  // for (let i = 0; i < arguments.length; i++) {
  //   if (Array.isArray(arguments[i])) {
  //     const el = arguments[i].slice();
  //     el.shift();
  //     res.push(el);
  //   }
  // }

  // return res;
}

// res = changeCollection([1, 2, 3], ["a", "b", "c"]);
// res = changeCollection([1, 2, 3]);
// console.log(res);

// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
// Данное задание выполните после того как познакомитесь с методами массивов

// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

const users = [
  {
    _id: "5e36b779dc76fe3db02adc32",
    balance: "$1,955.65",
    picture: "http://placehold.it/32x32",
    age: 33,
    name: "Berg Zimmerman",
    gender: "male",
  },
  {
    _id: "5e36b779d117774176f90e0b",
    balance: "$3,776.14",
    picture: "http://placehold.it/32x32",
    age: 37,
    name: "Deann Winters",
    gender: "female",
  },
  {
    _id: "5e36b779daf6e455ec54cf45",
    balance: "$3,424.84",
    picture: "http://placehold.it/32x32",
    age: 36,
    name: "Kari Waters",
    gender: "female",
  },
];

let testKey = "age",
  testValue = 36;
testKey = "gender";
testValue = "female";

function funcGetUsers(sourceArr, propKey, propValue) {
  if (
    Array.isArray(sourceArr) &&
    typeof propKey !== "undefined" &&
    typeof propValue !== "undefined"
  ) {
    let res = [];
    for (let i = 0; i < sourceArr.length; i++) {
      if (sourceArr[i][propKey] === propValue) {
        res.push(sourceArr[i]);
      }
    }
    return res;
  }
  return new Error("что-то не задано");
}

res = funcGetUsers(users, testKey, testValue);
// res = funcGetUsers(users, testValue);
// console.log(res);

// функцмм высшего порядка

// 1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// Первая функция возвращает строку “New value: ” и результат обработки:

// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

// Подсказка: secondFunc должна быть представлена функцией, которая принимает
// один аргумент (каждый элемент массива) и возвращает результат его обработки

function firstFunc(sourceArr, fn) {
  let res = "New value: ";
  for (i = 0; i < sourceArr.length; i++) {
    res += fn(sourceArr[i]);
  }
  return res.trim();
}

function handler1(el) {
  return el[0].toUpperCase() + el.slice(1);
}

let res1 = firstFunc(["my", "name", "is", "Trinity"], handler1);
// console.log(res1);

function handler2(el) {
  return el * 10 + ", ";
}

let res2 = firstFunc([10, 20, 30], handler2);
// console.log(res2);

// 2.
// Практическое задание по функциям высшего порядка
// Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция). Если передан один из аргументов не удовлетворяет условию то функция должна вернуть new Error("с произвольным сообщением.")

// функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback должен принимать один элемент массива, его индекс в массиве и весь массив.

function every(arr, fn) {
  if (!Array.isArray(arr))
    return new Error("The first argument expected as array");

  if (!fn || typeof fn !== "function")
    return new Error("The second argument expected as function");

  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i, arr)) {
      return false;
    }
  }

  return true;
}

function condition(el) {
  return el > 5;
}

let testArray = [1, 2];
// let testArray = ["e", "e"];

// console.log(testArray);
// console.log(condition);
// console.log(every(testArray, condition));

// console.log(
//   every([2, 3, 4, 4, 5], function (num) {
//     return typeof num === "number";
//   })
// );

// Что такое метод every можно прочитать здесь и ниже в презентации тоже о них идет речь.

// Задачи на   this
// Создать объект с розничной ценой и количеством продуктов.

// Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)

const prod = {
  price: 20,
  counts: 100,
  getTotalPrice() {
    return this.price * this.counts;
  },
};

// console.log(prod.getTotalPrice());

// Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.

// Для этого “позаимствуйте” метод из предыдущего объекта.

const anotherProd = {
  price: 10,
  counts: 50,
};

res = prod.getTotalPrice.call(anotherProd);
// console.log(res);

// 7. Даны объект и функция:

let sizes = { width: 5, height: 11 },
  getSquare = function () {
    return this.width * this.height;
  };

// Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes

res = getSquare.call(sizes);
// console.log(res);

// 8.

let element = {
  height: 25,
  getHeight: function () {
    return this.height;
  },
};

let getElementHeight = element.getHeight;

res = getElementHeight(); // undefined
// console.log(res);

// Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.
getElementHeight = element.getHeight.bind(element);
res = getElementHeight(); // undefined
// console.log(res);

//=============
// 1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

let sourceArr = [1, 2, 3, 5, 8, 9, 10];
let resArr = [];

// мой вариант:
// sourseArr.forEach((elem, i, arr) => {
//   resArr.push({
//     value: elem,
//     odd: Boolean(elem % 2),
//   });
// });

// вариант препода:
resArr = sourceArr.map((num) => ({
  value: num,
  odd: Boolean(num % 2),
}));

// console.log(resArr);

// 4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

sourceArr = [
  { char: "a", index: 12 },
  { char: "w", index: 8 },
  { char: "Y", index: 10 },
  { char: "p", index: 3 },
  { char: "p", index: 2 },
  { char: "N", index: 6 },
  { char: " ", index: 5 },
  { char: "y", index: 4 },
  { char: "r", index: 13 },
  { char: "H", index: 0 },
  { char: "e", index: 11 },
  { char: "a", index: 1 },
  { char: " ", index: 9 },
  { char: "!", index: 14 },
  { char: "e", index: 7 },
];

// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

resArr = [];

// мой вариант:
// sourceArr.forEach((elem) =>  resArr[elem.index] = elem.char);
// resStr = resArr.join('');

// вариант препода
function getStr(arr) {
  if (!Array.isArray(arr)) return;
  return arr
    .slice()
    .sort((prev, next) => prev.index - next.index)
    .reduce((acc, { char }) => acc + char, "");
}

resStr = getStr(sourceArr);

// console.log(resArr, resStr);

// 3. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

let products = [
  { title: "prod1", price: 5.2 },
  { title: "prod2", price: 0.18 },
  { title: "prod3", price: 15 },
  { title: "prod4", price: 25 },
  { title: "prod5", price: 18.9 },
  { title: "prod6", price: 8 },
  { title: "prod7", price: 19 },
  { title: "prod8", price: 63 },
];

let minPrice = 15,
  maxPrice = 30;

// мое решение
// function getProducts(arr, minPrice, maxPrice) {
//   // const cloned = arr.slice();
//   return (
//     // cloned
//     arr
//       .filter((item) => ((item.price >= minPrice) && (item.price <= maxPrice)))
//       .sort((prev, next) => prev.price- next.price)
//   );
// }

//  решение препода? тоже самое но он не делал копию массива в функции...
// в фильтер передавал  просто {price}  а не item
function getProducts(prod, min, max) {
  return prod
    .filter(({ price }) => price >= min && price <= max)
    .sort((prev, next) => prev.price - next.price);
}

// console.log(products, getProducts(products, minPrice, maxPrice));

//============================================
//======= замыкания
// 1. Создайте функцию которая бы умела делать:
// Подсказка, функция minus должна возвращать другую функцию.

// мое решение
function minus(num1 = 0) {
  return (num2 = 0) => num1 - num2;
}

// пример препода
// function minus(num1 = 0) {
//   return function (num2 = 0) {
//     return num1 - num2;
//   };
// }

// minus(10)(6); // 4
// console.log(minus(10)(6));

// minus(5)(6); // -1
// console.log(minus(5)(6));

// minus(10)(); // 10
// console.log(minus(10)());

// minus()(6); // -6
// console.log(minus()(6));

// minus()(); // 0
// console.log(minus()());

// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:

// мое решение
// function multiplyMaker(num1=2) {
//   return (num2=1) => num1*=num2
// }

// решение препода
function multiplyMaker(num1 = 2) {
  return function (num2 = 1) {
    return (num1 *= num2);
  };
}

const multiply = multiplyMaker(2);

// res = multiply(2); // 4 (2 * 2)
// console.log(res);

// res = multiply(1); // 4 (4 * 1)
// console.log(res);

// res = multiply(3); // 12 (4 * 3)
// console.log(res);

// res = multiply(10); // 120 (12 * 10)
// console.log(res);

// 3. Реализовать модуль, который работает со строкой и имеет методы:

// a. установить строку

// i. если передано пустое значение, то установить пустую строку

// ii. если передано число, число привести к строке

// b. получить строку

// c. получить длину строки

// d. получить строку-перевертыш

// Пример:

// модуль.установитьСтроку(‘abcde’);

// модуль.получитьСтроку(); // ‘abcde’

// модуль.получитьДлину(); // 5

// пример препода:

// const strModule = (function () {
//   let str = '';
//   function setStr(val = '') {
//     str = String(val);
//   }

//   function getStr() {
//     return str;
//   }

//   function getStrLength() {
//     return str.length;
//   }

//   function getReverseStr() {
//     return str.split('').reverse().join('');
//   }

//   return {
//     setStr,
//     getStr,
//     getStrLength,
//     getReverseStr
//   }
// }());

// мой пример на основе препода:
function module() {
  let string = "";
  function setStr(val) {
    if (val == null) {
      string = "";
    }
    if (typeof string == "number") {
      string = val.toString;
    } else {
      string = val;
    }
  }
  function getStr() {
    return string;
  }
  function getStrLength() {
    return string.length;
  }
  function getReverseStr() {
    return string.split("").reverse().join("");
  }
  return {
    setStr,
    getStr,
    getStrLength,
    getReverseStr,
  };
}

// let strModule = module();
// let strModule2 = module();
// // console.log(strModule);

// strModule.setStr("some string");
// // strModule.setStr("abcde");
// console.log("strModule.getStr() = " + strModule.getStr());
// console.log("strModule.getStrLength() = " + strModule.getStrLength());
// console.log("strModule.getReverseStr() = " + strModule.getReverseStr());

// strModule2.setStr("fgt56dfs");
// console.log("strModule2.getStr() = " + strModule2.getStr());
// console.log("strModule2.getStrLength() = " + strModule2.getStrLength());
// console.log("strModule2.getReverseStr() = " + strModule2.getReverseStr());

// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

// мое решение , подсматривал
let calc1;

function myCalc() {
  let myValue;
  function setValue(val) {
    myValue = parseFloat(val);
    return this;
  }
  function add(val) {
    myValue += parseFloat(val);
    return this;
  }
  function multiply(val) {
    myValue *= parseFloat(val);
    return this;
  }
  //вычитать
  function subtract(val) {
    myValue -= parseFloat(val);
    return this;
  }
  // делить
  function divide(val) {
    myValue /= parseFloat(val);
    return this;
  }
  // возводить в степень. raise
  function raise(val) {
    myValue = Math.pow(myValue, parseFloat(val));
    return this;
  }

  function getValue() {
    return parseFloat(myValue.toFixed(2));
  }

  return {
    setValue,
    add,
    multiply,
    subtract,
    divide,
    raise,
    getValue,
  };
}
calc1 = myCalc();

// решение препода

// const numModule = (function () {
//   let num = 0;

//   function setValue(val = 0) {
//     num = Number(val);
//     return this;
//   }

//   function add(val) {
//     num += Number(val);
//     return this;
//   }

//   function subtract(val) {
//     num -= Number(val);
//     return this;
//   }

//   function multiply(val) {
//     num *= Number(val);
//     return this;
//   }

//   function divide(val) {
//     num /= Number(val);
//     return this;
//   }

//   function raise(val = 2) {
//     num = Math.pow(num, val);
//     return this;
//   }

//   function getValue() {
//     return Number(num.toFixed(2)) || 0;
//   }

//     return {
//       setValue,
//       add,
//       multiply,
//       subtract,
//       divide,
//       raise,
//       getValue
//     };
// }());
// calc1 = numModule;

// // модуль.установитьЗначение(10); // значение = 10
// calc1.setValue(10.136);
// console.log(calc1.getValue());

// // модуль.прибавить(5); // значение += 5
// res = calc1.add(5);
// console.log(calc1.getValue());

// // модуль.умножить(2); // значение *= 2
// res = calc1.multiply(2);
// // console.log(res);

// // модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
// console.log(calc1.getValue());

// // Также можно вызывать методы цепочкой:
// // модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100
// res = calc1.setValue(10).raise(2).getValue();
// console.log(res);

let testArr = [{ user: "Name 1" }, 1];
console.log(testArr, testArr[0]);
testArr[0].user = "Name 2";
console.log(testArr, testArr[0]);
testArr[0].user = "Name 3";
console.log(testArr, testArr[0]);
//
testArr = [{ user: "Name 1" }, 1];
console.log(testArr, testArr[0], testArr[0].user);
testArr[0].user = "Name 2";
console.log(testArr, testArr[0], testArr[0].user);
testArr[0].user = "Name 3";
console.log(testArr, testArr[0], testArr[0].user);

//=================
//4. С помощью оператора rest, из объекта user (из предыдущей задачи) скопировать в новый массив значение следующих полей tags и friends.

// решение препода
user = {
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

const newArr = [...user.tags, ...user.friends];
let deepCopyObj = JSON.parse(JSON.stringify(newArr));
console.log("newArr[4] = ", newArr[4]);
console.log(
  `(до присваивания)deepCopyObj = `,
  deepCopyObj,
  `\n(дuser о присваивания)deepCopyObj[4].name = `,
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

let f = function g() {
  return 23;
};
typeof g();

var foo = {
  bar: function () {
    return this.baz;
  },
  baz: 1,
};
res = (function () {
  return typeof arguments[0]();
})(foo.bar);

console.log(res);

console.log(typeof typeof 1);

const obj1 = { type: "processor" };
const obj2 = obj1;

obj2.type = "RAM";
obj2.capacity = "2Gb";

console.log(obj1, obj2);

console.log("3" + -" " + -+-"1");

(function greetNewUser() {
  console.log("Hello " + this.name);
}).bind({
  name: "John",
})();

var highFive = (function () {
  var x = 0;
  return function () {
    x += 5;
    console.log(x);
    return x;
  };
})();
highFive();
highFive();

var c = {
  func: function () {},
};

console.log(c);

// (function () {
//   console.log(a);
//   c();
//   console.log(b);
//   function c() {
//     console.log("Hello world!");
//   }
//   var a = 10;
//   b = 25;
// })();

arr = [2, 15, 20, 40, 9];
console.log(Math.max.apply(null, arr));
console.log(Math.max(null, arr));

// let a,
//   x,
//   c = [1, 2, 3, 4, 5];
// console.log(a, c);

var arr = [0, 1, 2, 4];
console.log(arr.indexOf(3));

// var x = 1;
var obj = { x: 10 };

delete x;
delete obj.x;

// console.log(x, obj.x);

let func = function () {
  var y = true;
  if (y) {
    var x = 10;
  }
  console.log(x);
};
func();

var name1 = { name: "Denis" };
var name2 = { name: "Denis" };
console.log(name1 == name2);
