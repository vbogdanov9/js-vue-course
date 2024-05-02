const plus = (x = 0, y = 0) => x + y;
const plusRes = plus(1, 2);

const withoutArgs = () => console.log('Hello world');
const singleArg = x => x * 2;
const moreActions = (a, b) => {
  a *= 2;
  b *= 3;
  return a + b;
};
const returnObj = (str = '') => ({
  value: str,
  length: str.length,
});

function plusFoo(x, y) {
  console.log(arguments);
  return x + y;
}

// plusFoo(1, 2, 3, 'hello');

const obj = {
  firstName: 'Denis',
  age: 30,
  getFirstName() {
    console.log(this);
  },
  getAgeArrow: null,
  getAge() {
    // this.getAgeArrow = () => console.log(this);
    setTimeout(() => console.log(this));
  },
};

// obj.getAge();
// obj.getAgeArrow();

// 1. Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):


function sum() {
const params = Array.prototype.slice.call(arguments);
if (!params.length) return 0;


return params.reduce(function (prev, next) { return prev + next; });
}



sum(1, 2, 3, 4); // 10
sum(); // 0


// что такое метод reduce можно прочитать https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


const arrowSum = (...params) => {
  if (!params.length) return 0;
  return params.reduce((prev, next) => prev + next);
}

// console.log(arrowSum(1,2,3,4));
// console.log(arrowSum());

// const sum = (...params) => {
//   if (!params.length) return 0;
//   return params.reduce((prev, next) => prev + next);
// };

// 2. Переделать функцию с использованием функции-стрелки

// function convertToObject(num) {
//   const obj = {
//       value: num,
//       isOdd: Boolean(num % 2)
//   }
//   return obj;
// }

// const convertToObject = (num) => {
//   const obj = {
//     value: num,
//     isOdd: Boolean(num % 2)
//   }
//   return obj;
// }

const convertToObject = (num) => ({
  value: num,
  isOdd: Boolean(num % 2),
});

// console.log(convertToObject(10));