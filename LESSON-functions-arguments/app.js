// function foo(x) {
//   console.log(x);
//   console.log(arguments);

//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// };

// foo(
//   11,
//   "some string",
//   [1, 2, 3]
// );

// (function (msg) {
//   console.log(msg);
//   function sayHello(firstName = "Default", lastName = "Default") {
//     console.log(firstName, lastName);
//     console.log("Hello world");
//     return `Hello ${firstName} ${lastName}`;
//   }

// let res = sayHello("Denis", "Mescheryakov");
// let res2 = sayHello("Dima", "Mescheryakov") + "!";
// let res3 = sayHello();
// console.log(res3);

// let x = 10;

// function foo(x) {
//   x = 20;
//   console.log(x);
//   return x;
// }

// foo();

// console.log(x);

// const user = {
//   name: "Denis",
//   age: 30
// };

// function getObj(obj) {
//   obj.name = "Den";
// }

// getObj(user);
// console.log(user);

//   const square = function (x) {
//     return x * x;
//   };
// })("Hello world");

// 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply() {
  let arg;
  let argcount = 0;
  let sum = 1;
  for (let i = 0; i < arguments.length; i++) {
    arg = parseFloat(arguments[i]);
    if (Number.isNaN(arg)) continue;
    sum *= arg;
    argcount++;
    // console.log(i,arg,sum);
  }
  return argcount > 0 ? sum : 0;
}

// console.log(multiply(1,2,3));

// 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseString(arg) {
  let sourceString = String(arg);
  let newString = "";
  for (let i = sourceString.length; i--; ) {
    //i-- это и счетчик и условие
    newString += sourceString[i];
  }
  return newString;
}

// reverseString("test");
// reverseString("");
// reverseString(null);
// reverseString(undefined);
// reverseString();

// 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:

// getCodeStringFromText(‘hello’) // “104 101 108 108 111”

// подсказка: для получения кода используйте специальный метод
//charCodeAt и trim

function getCodeStringFromText(value) {
  let string = String(value);
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    newString += string.charCodeAt(i) + " ";
  }
  newString = newString.trim();
  console.log(newString);
  return newString;
}

// getCodeStringFromText("hello");

// 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

function guessTheNumber(num) {
  // let randomNum = Math.round((Math.random() *10+0.5));

  // random[randomNum]++;
  // my[num]++;
  if (num < 0 || num > 10)
    return new Error("Please provide number in range 0-10");

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

let i = 8;
// console.log(guessTheNumber(i));

// let my = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   random = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// mutch = 0;
// for (i = 1; i < 20000001; i++) {
//   guessTheNumber((i % 10) + 1);
// }
// console.log(my, random, mutch);

// 5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
// Данное задание выполните после того как познакомитесь с методами массивов.

function getArray(num) {
  if (parseInt(num) != num) return "please provide integer";
  let res = [];
  for (i = 1; i <= num; i++) {
    res.push(i);
  }
  return res;
}

// console.log(getArray(10));

// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива. Данное задание выполните после того как познакомитесь с методами массивов:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]
function doubleArray(sourceArr) {
  return sourceArr.concat(sourceArr);
}
// res = doubleArray([1, 2, 3]);
// console.log(res);

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

res = changeCollection([1, 2, 3], ["a", "b", "c"]);
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

const testKey = "age",
  testValue = 36;

function funcGetUsers (sourceArr, propKey, propValue) {
  if (
    Array.isArray(sourceArr) 
    && typeof propKey !== "undefined" 
    && typeof propValue !== "undefined"
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
console.log(res);