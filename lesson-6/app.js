// Numbers
const num1 = 10;
const num2 = 20;

let value;
// var value;

value = num1 + num2;
value = value + 100;
value += 100;
// value = 6 % 2; //  остаток от делени я на 2
value ++;
value --;
++value;
--value;
value = 0.6 + 0.7;
// value = ( 0.6 * 10 + 0.7 * 10 ) / 10;

// + * / - %

value = parseFloat(value.toFixed(1));
value = Math;


value = Math.random();
value = Math.round(2.4);
value = Math.ceil(2.1);
value = Math.floor(2.9);
value = Math.min(2, 12, 15, 0, 12);
value = Math.floor(Math.random() * 10 + 1);



const arr = ['black', 'red', 'yellow', 'pink', 'white', 'blue', 'orange', 'green'];
value = Math.floor(Math.random() * arr.length);

// console.log(arr);

// console.log(value, arr[value]);
// Math

// value = Math.PI;
// value = Math.PI.toFixed(2);
value = Number(Math.PI.toFixed(2));
// console.log(value);

const arr2 = [15, 11, 16, 12, 51, 12, 13, 51];
let max = Math.max.apply(null, arr2); 
let min = Math.min.apply(null, arr2);
// console.log(arr2, min, max);

// a. Получить случайное число и округлить его до двух цифр после запятой
value = +Math.random().toFixed(2);



// b. Получить случайное целое число от 0 до X. X - любое произвольное число. 
let X=1000000;
value = Math.round(Math.random()*X);
console.log(X, value);

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
value = (10*0.6 + 10*0.7)/10;
// console.log(value);

// 5. Получить число из строки ‘100$’
value = '100$';
value = parseInt(value);
// value = Number(value);
console.log(value);




