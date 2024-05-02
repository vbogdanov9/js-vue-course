let a = 1;
// let b = 0;

// // if (a > 0) {
// //   b = a;
// // } else {
// //   b += 1;
// // }

// // выражение ? если true : если false;
// // выражение ? если true : выражение ? если true : если false;
// b = a > 0 ? a : b + 1;

// b =  a > 0 ? 2 : a < 0 ? 3 : 0;


// // console.log(`b: ${b}`);
// let color = 'yellow';

// switch(color) {
//   case 'yellow': 
//   case 'red': 
//     console.log('Color is red || yellow');
//     break;
//   default: 
//     console.log('Default');
// }


// Записать в виде switch case следующее условие:

// if (a === 'block') {
// 	console.log('block')
// } else if (a === 'none') {
// 	console.log('none')
// } else if (a === 'inline') {
// console.log('inline')
// } else {
// 	console.log('other')
// }

// a = 'inline';

// switch(a) {
//   case 'block': console.log('block'); break;
//   case 'none': console.log('none'); break;
//   case 'inline': console.log('inline'); break;
//   default: console.log('other'); 
// }



// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.



// Из задач по условному оператору if else выполнить задачи 1 и 2 в виде тернарного оператора.

// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let value = `hidden`;

value = (value == `hidden`) ? 'visible' : `hidden`;

// if (value == `hidden`) {
//   value =  'visible';
// } else {
//   value = `hidden`;
// }

console.log(value);

//2. Используя if, записать условие:
//  если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

 value = -2;

 value = (value == 0) ? 1 : (value<0) ?  `less then zero`: (value>0) ? value*=10 : value;
// if (value == 0) {
//   value =  1;
// } else if (value<0) {
//   value = `less then zero`;
// } else if (value>0) {
//   value*=10;
// }
console.log(value);