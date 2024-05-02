let res;

// Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

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

// модуль.установитьЗначение(10); // значение = 10
calc1.setValue(10.136);
console.log(calc1.getValue());

// модуль.прибавить(5); // значение += 5
res = calc1.add(5);
// console.log(res);

// модуль.умножить(2); // значение *= 2
res = calc1.multiply(2);
// console.log(res);

// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
console.log(calc1.getValue());

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100
res = calc1.setValue(10).raise(2).getValue();
console.log(res);

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

let strModule = module();
let strModule2 = module();
// console.log(strModule);

strModule.setStr("abcde");
console.log("strModule.getStr() = " + strModule.getStr());
console.log("strModule.getStrLength() = " + strModule.getStrLength());
console.log("strModule.getReverseStr() = " + strModule.getReverseStr());

strModule2.setStr("fgt56dfs");
console.log("strModule2.getStr() = " + strModule2.getStr());
console.log("strModule2.getStrLength() = " + strModule2.getStrLength());
console.log("strModule2.getReverseStr() = " + strModule2.getReverseStr());

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

res = multiply(2); // 4 (2 * 2)
console.log(res);

res = multiply(1); // 4 (4 * 1)
console.log(res);

res = multiply(3); // 12 (4 * 3)
console.log(res);

res = multiply(10); // 120 (12 * 10)
console.log(res);

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

minus(10)(6); // 4
console.log(minus(10)(6));

minus(5)(6); // -1
console.log(minus(5)(6));

minus(10)(); // 10
console.log(minus(10)());

minus()(6); // -6
console.log(minus()(6));

minus()(); // 0
console.log(minus()());

//===============================

function createCounter() {
  let counter = 0;
  const myFunction = function () {
    counter = counter + 1;
    return counter;
  };
  return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log("example increment", c1, c2, c3);

function getFullName(firstName, lastName) {
  return function () {
    return `${firstName} ${lastName}`;
  };
}

const getname = getFullName("Denis", "Mescheryakov");
// console.log(getname());

function updateValue(val = 0) {
  let x = val;
  return function (num = 0) {
    return (x += num);
  };
}

const updtVal = updateValue(2);
const updtVal2 = updateValue(4);
// console.log(updtVal(1));
// console.log(updtVal(0));
// console.log(updtVal2(2));
// console.log(updtVal2(0));

function checkCred() {
  const login = "test";
  const password = "somePassword";

  return {
    checkLogin(value) {
      return login === value;
    },
    checkPassword(value) {
      return password === value;
    },
  };
}

const check = checkCred();
// console.log(check);
// console.log(check.checkLogin('test'));

function closureExample() {
  const arrOfFunc = [];
  let value = "";

  for (let i = 0; i < 10; i++) {
    value += i;
    arrOfFunc.push(function () {
      console.log(value, i);
    });
  }
  return arrOfFunc;
}

res = closureExample();
res[0]();
res[5]();
