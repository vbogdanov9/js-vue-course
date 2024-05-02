// >, <, >=, <=, ==, ===, !=, !==

// let value;

// value = 1 > 2;



// value = 2 <= 2;


// value = 1 == 1;

// value = 1 == '1';

// value = 1 === '1';

// value = 1 != '1';

// value = 1 !== '1';

// value = 'a' < 'ab';

// value = 'A'.charCodeAt();



// if (условие) {
//   // actions
// } else {
//   // else actions
// }

// value = 10;

// if (value !== 10) {
//   console.log('value: 10');
// } else {
//   console.log('else');
// }

// value = 100;

// if (value) {
//   console.log('some actions', value);
// } else {
//   console.log('else', value);
// }

// || && !
// value = null;

// if (!value) {
//   console.log(value);
// }

// value = [1];

// if (value.length) {
//   console.log(value);
// } else {
//   console.log('array is empty');
// }

// value = null

// if (Array.isArray(value)) {
//   console.log(value);
// } else {
//   console.log('array is empty');
// }


// let user = {
//   name: null
// };

// if (user.hasOwnProperty('name')) {
//   console.log(user.name);
// } else {
//   console.log('else');
// }

// || &&
// value = 0 || 0 || null;

// let age = 10;

// if (age < 16 || age > 65) {
//   console.log('some actions');
// } else {
//   console.log('else');
// }

// let serverNickname = '';
// let nickname = serverNickname || 'default nickname';

// console.log(nickname);

// value = 1 && 2 && 3;

// productPrice = 10;

// if (productPrice >= 5 && productPrice <= 20) {
//   console.log('беру');
// } else {
//   console.log('else');
// }

// console.log(value);

// value = 10;

// if (value < 10) {
//   console.log('value < 10', value);
// } else if (value >= 10) {
//   console.log('value >= 10', value);
// } else {
//   console.log('else');
// }


// Чему равно а, почему?

// let a = 0 || 'string';
// let a = 1 && 'string';
// let a = null || 25;
// let a = null && 25;
// let a = null || 0 || 35;
// let a = null && 0 && 35;

// Что отобразится в консоли. Почему?

// a =   12 + 14 + '12'
// a =  3 + 2 - '1'
// a =  '3' + 2 - 1
// a =  true + 2
// a =  +'10' + 1
// a =  undefined + 2
// a =  null + 5
// a =  true + undefined




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
// let car = { name: 'Lexus', age: 4, create: 2008, needRepair: true };
//  if (car.age>5) {
//   console.log('Need Repair');
//   car.needRepair = true;
//  } else {
//   car.needRepair = false;
//  }
//  console.log(car);


// 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.


// let item = { name: 'Intel core i7', price: '100$', discount: '0%' };

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

let product = {
    name: "Яблоко",
    price: "15$",
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let floatPrice = parseFloat(product.price);
if ((floatPrice>=min) && (floatPrice<=max)) {
  console.log(product.name);
} else {console.log('товаров не найдено');}

