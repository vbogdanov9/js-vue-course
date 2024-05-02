const firstName = 'Denis';
const lastName = 'Mescheryakov';
const age = 30;

let str;

str = 'Hello my name is ' + firstName + ' ' + lastName;



str = '<ul>' +
      '<li>First name: ' + firstName + '</li>' +
      '<li>Last name: ' + lastName + '</li>' +
      '<li>Age: ' + age + '</li>' +
      '</ul>';


// ES6
str = `
  <ul>
    <li>First name: ${ firstName }</li>
    <li>Last name: ${ lastName }</li>
    <li>Age: ${ age }</li>
    <li>Math.random: ${ Math.random() }</li>
    <li>5 + 5: ${ 5 + 5 }</li>
  </ul>
`;



let string = `some test string`;

// console.log(string[string.length-1]);

let string2 = string[0].toUpperCase() + string.slice(1,string.length-1) + string[string.length-1].toUpperCase();

const a=20, b=16;

let string3 = String(a)+String(b);

// console.log(string);
// console.log(string2);

// ВРУЧНУЮ НИЧЕГО НЕ СЧИТАТЬ

// 1. 
str = `
 <p>string = ${ string } </p>
  <ol>
    <li> Получить первую и последнюю буквы строки. Первая: ${ string[0] } , последняя: ${ string.at(-1) } </li>
    <li> Сделать первую и последнюю буквы в верхнем регистре: ${ string2 }</li>
    <li> Найти положение слова ‘string’ в строке ${ string.indexOf('string') } </li>
    <li> Найти положение второго пробела (“вручную” ничего не считать) ${ string.lastIndexOf(' ') }</li>
    <li> Получить строку с 5-го символа длиной 4 буквы: ${ string.substr(5, 4) } </li>
    <li> Получить строку с 5-го символа длиной 4 буквы: ${ string.slice(5, 5+4) } </li>
    <li> Получить строку с 5-го по 9-й символы: ${ string.slice(5, 9) }</li>
    <li> Получить новую строку из исходной путем удаления последних 6-и символов
   (то есть исходная строка без последних 6и символов): ${ string.slice(0, -6) }</li>
    <li> Из двух переменных a=20 и b=16 получить переменную string, в которой будет
// содержаться текст “2016”: let string3 = String(a)+String(b) , string3 =  ${ string3 } </li>
  </ol>
`;
// console.log(str);
document.body.innerHTML = str;
// 2. 
// 3. 
// 4. 
// 5. 
// 6. 
// 7. 
// 8. 
