// while, do while, for, for of, for in

// let i = 10;
// while(i--) {
//   console.log(i);
// }

// do {
//   console.log('action');
// } while(i > 0);

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   if (i === 6) {
//     continue;
//   }
//   console.log(i);
// }

// let str = 'Hello';
// let res = '';

// for (let i = 0; i < str.length; i++) {
//   res += str[i] + '*';
// }

// console.log(res);

// let colors = ['white', 'black', 'yellow', 'orange'];

// for (let i = 0; i < colors.length; i++) {
//   colors[i] = colors[i].toUpperCase();
// }

// console.log(colors);

// const users = [
//   {
//     name: 'Denis',
//     age: 30
//   },
//   {
//     name: 'Oleg',
//     age: 12
//   },
//   {
//     name: 'Maks',
//     age: 25
//   },
//   {
//     name: 'Olga',
//     age: 2
//   },
// ];

// const usersObj = {};

// for (let i = 0; i < users.length; i++) {
//   usersObj[users[i].name] = users[i];
// }

// console.log(usersObj);

// const user = {
//   name: 'Denis',
//   age: 30
// };

// for (let key in usersObj) {
//   console.log(key);
//   console.log(usersObj[key]);
// }

// for (let value of users) {
//   console.log(value);
// }


// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова 
// будут в верхнем регистре. Использовать for или while.

let string = `i am in the easycode`, currentChar= '', res = '';
currentChar = string[0].toUpperCase();
res = res + currentChar;

for (let i = 1; i < string.length; i++) {
  if (string[i-1] == ' ') {
    currentChar = string[i].toUpperCase()}
    else {currentChar = string[i]};
    res = res + currentChar;
}
console.log(res);


// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
string = `tseb eht ma i`, res = '';
let stringLength = string.length -1 ;

for (let i = stringLength; i >= 0 ; i--) {
  res = res + string[i];
}
console.log(string,res);


// 3. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
res = 1;
for (let i = 2; i <= 10; i++) {
  res = res*i;
  // console.log(`fact[${ i }] = `, res);
}
console.log(`fact[10] = `,res);

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
string = `JavaScript is a pretty good language`, currentChar= '', res = '';
currentChar = string[0].toUpperCase();
res = res + currentChar;
for (let i = 1; i < string.length; i++) {
  if (string[i-1] == ' ') {
    currentChar = string[i].toUpperCase()}
    else {currentChar = string[i]};
    res = (currentChar == ' ') ? res: res + currentChar;
}

console.log(string, res);


// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
res = [];

for (let value of arr) {
  if ((value % 2) == 1) res.push(value)
}
console.log(arr, res);


// 6. Дан объект:
let list = {
     name: 'denis',
     work: 'easycode',
     age: 29
}
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

for (let key in list) {
  if ((typeof list[key]) == 'string') {
    list[key] = list[key].toUpperCase();
  }
}
console.log(list);


// let user = {"name":"Smith", age: 30};
// console.log(user['name'], user.name, user['name'] == user.name);


// console.log(+'-' + 2);

// let str = '123';
// let result = +str;
// console.log(typeof(result), result);

// let foo = { str: 'test' }; 
// console.log(foo , foo.str, foo && foo.str);

// // let -some;
// // var 21info;
// // console.log(-some);

// const __global = {};
// console.log(__global);

// arr = [];
// arr[500] = 1;
// console.log(arr.length, parseInt(arr));
// // parsInt(Arr);


// var x = 1; 
// if (x) {
//   var x = 2; 
//   console.log(x);
// } 
// console.log(x); 

// console.log(typeof NaN);

// let y; 
// if (y) {
//   let y = 2; 
//   console.log(y);
// } else {
//   let y = 10;
//   console.log(y);
// }
// console.log(y); 

// const z = 1;
// z = 20;

// const obj = { brand: 'EasyCode' };
// obj.country = 'Ukraine';
// console.log(obj);