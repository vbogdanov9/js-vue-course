// function highOrder(value, callback) {
//   const arrFromStr = value.split(' ');
//   console.log(arrFromStr);
// }

// function myCallback(char) {}

// highOrder('Denis Mescheryakov');

// function question(job) {
//   const jobsDictionary = {
//     developer: 'Что такое JS?',
//     teacher: 'Какой предмет вы преподаете?',
//   };

//   return function(name) {
//     return jobsDictionary[job] + ' ' + name;
//   };
// }

// const developerQustion = question('developer');
// console.log(developerQustion);
// console.log(developerQustion('Denis'));

// Практическое задание по функциям высшего порядка
// Создать функции:

// - первая функция принимает массив и колбэк (одна для всех вызовов)

// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// Первая функция возвращает строку “New value: ” и результат обработки:

// Имена функций должны быть как в примере!

// Подсказка: secondFunc должна быть представлена функцией, которая принимает

// один аргумент (каждый элемент массива) и возвращает результат его обработки

// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”

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

// console.log(firstFunc(["my", "name", "is", "Trinity"], handler1));

// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”

function handler2(el) {
  return el * 10 + ", ";
}

// console.log(firstFunc([10, 20, 30], handler2));

// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”

function handler3(el) {
  return `${el.name} is ${el.age}, `;
}

// console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

function handler4(el) {
  return el.split("").reverse().join("") + ", ";
}

// console.log(firstFunc(['abc', '123'], handler4));

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

// let testArray = [1, 2];
let testArray = ["e", "e"];

console.log(testArray);
console.log(condition);
console.log(every(testArray, condition));

// Что такое метод every можно прочитать здесь и ниже в презентации тоже о них идет речь.
