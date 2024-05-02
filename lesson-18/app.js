
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




// 2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.
sourceArr = [12, 4, 50, 1, 0, 18, 40];
let haveZero;

// мой
haveZero = sourceArr.some((value) => value === 0);

// вариант препода, в принципе тоже самое но лругое название переменной
// haveZero = sourceArr.some((num) => num === 0);


// console.log(haveZero);




// 3. Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true
sourceArr = ["yess", "hello", "no00", "easycode", "what"];
let haveThreeChars;

// подробный код
// haveThreeChars = sourceArr.every((elem) => {
//   res = (elem.length > 3);
//   console.log(elem, elem.length, res);
//   return res;
// });

// мое решение:
// haveThreeChars = sourceArr.every((elem) => elem.length > 3);

 // решение препода, тоже что у меня но у него больше или равно..
haveThreeChars = sourceArr.every((str) => str.length >= 3);

// console.log(haveThreeChars);




// 4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

sourceArr = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

resArr = [];

// мой вариант:
// sourceArr.forEach((elem) =>  resArr[elem.index] = elem.char);
// resStr = resArr.join('');

// вариант препода
function getStr(arr) {
  const cloned = arr.slice();
  // console.log(arr, cloned);
  // sorted = cloned.sort((prev, next) => prev.index - next.index)
  return (
    cloned
      // .sort((prev, next) => prev.index - next.index)
      .reduce((acc, { char }) => acc + char, "")
  );
}

resStr = getStr(sourceArr);

// console.log(resArr, resStr);





// задачи на метод  sort
// 1. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): 
sourceArr = [  [14, 45],  [1],  ['a', 'c', 'd']  ];
// мое решение
// sourceArr.sort((prev, next) => prev.length - next.length);

//решение препода, такое только другие имена переменных
sourceArr.sort((prev, next) => prev.length - next.length);

// console.log(sourceArr);

// res: [ [1], [14, 45], ['a', 'c', 'd'] ]


// 2. Есть массив объектов:
sourceArr = [
  { cpu: "intel", info: { cores: 2, сache: 3 } },
  { cpu: "intel", info: { cores: 4, сache: 4 } },
  { cpu: "amd", info: { cores: 1, сache: 1 } },
  { cpu: "intel", info: { cores: 3, сache: 2 } },
  { cpu: "amd", info: { cores: 4, сache: 2 } },
];

// Отсортировать их по возрастающему количеству ядер (cores).
// мое решение
// sourceArr.sort((prev, next) => prev.info.cores - next.info.cores);

// решение препода? такое же отличается именами переменных
sourceArr.sort((prev, next) => prev.info.cores - next.info.cores);


// console.log(sourceArr);

// 3. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

let minPrice = 15, maxPrice = 30;


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


console.log(products,getProducts(products, minPrice, maxPrice));




// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
























const users = [
  {
    _id: "5cdce6ce338171bb473d2855",
    index: 0,
    isActive: false,
    balance: 2397.64,
    age: 39,
    name: "Lucile Finley",
    gender: "female",
    company: "ZOXY",
    email: "lucilefinley@zoxy.com",
    phone: "+1 (842) 566-3328",
    registered: "2015-07-12T09:39:03 -03:00"
  },
  {
    _id: "5cdce6ce0aa8d071fa4f4cc5",
    index: 1,
    isActive: true,
    balance: 2608.48,
    age: 33,
    name: "Woodward Grimes",
    gender: "male",
    company: "FORTEAN",
    email: "woodwardgrimes@fortean.com",
    phone: "+1 (960) 436-3138",
    registered: "2014-09-08T03:24:39 -03:00"
  },
  {
    _id: "5cdce6ce103de120d32d6fe4",
    index: 2,
    isActive: true,
    balance: 1699.99,
    age: 25,
    name: "Robinson Coleman",
    gender: "male",
    company: "GENMOM",
    email: "robinsoncoleman@genmom.com",
    phone: "+1 (852) 543-3171",
    registered: "2019-04-23T08:24:58 -03:00"
  },
  {
    _id: "5cdce6cebada7a418d8ccb3d",
    index: 3,
    isActive: true,
    balance: 2621.84,
    age: 25,
    name: "Austin Benton",
    gender: "male",
    company: "ZILIDIUM",
    email: "austinbenton@zilidium.com",
    phone: "+1 (977) 573-2627",
    registered: "2016-08-02T10:08:24 -03:00"
  },
  {
    _id: "5cdce6ced81fe99596d9cef5",
    index: 4,
    isActive: true,
    balance: 1297.31,
    age: 37,
    name: "Casandra Stout",
    gender: "female",
    company: "ANACHO",
    email: "casandrastout@anacho.com",
    phone: "+1 (929) 465-3804",
    registered: "2018-04-14T11:27:26 -03:00"
  },
  {
    _id: "5cdce6ce6c3ae6c4d6f39e88",
    index: 5,
    isActive: false,
    balance: 2165.49,
    age: 20,
    name: "Valencia Carrillo",
    gender: "male",
    company: "XEREX",
    email: "valenciacarrillo@xerex.com",
    phone: "+1 (977) 522-3378",
    registered: "2014-02-14T11:45:27 -02:00"
  }
];

users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
console.log(users);

const numArr = [10, 7, 44, 32]
numArr.sort();
numArr.sort((prev, next) => prev - next);
console.log(numArr);


const user = users.find((user) => user.name === "Valencia Carrillo");
console.log(user);


const usersObj = users.reduce ((acc, user) => {
  acc[user._id] = user;
  return acc;
}, {})

console.log(usersObj);

const isMale = users.some((user) => user.gender === "male");
console.log(isMale);

const isAllMale = users.every((user) => user.gender === "male");
console.log(isAllMale);

const isAll18 = users.every(user => user.age > 18);
console.log(isAll18);








// // forEach
// // filter
// // map
// // reduce
// // some/every
// // sort
// // find

// // forEach
// // users.forEach((user, i, arr) => {
// //   console.log(user, i, arr);
// // });

// // filter
// const userLess30 = users.filter(user => user.age < 30);
// // console.log(userLess30);
// const activeUsers = users.filter(user => user.isActive);
// // console.log(activeUsers);

// // Map
// const usersName = users.map(user => user.name);
// // const usersName = users.map(user => ({ name: user.name, age: user.age }));
// // console.log(usersName);

// // Reduce
// const totalBalance = users.reduce((acc, user) => (acc += user.balance), 0);
// // console.log(totalBalance);
// const usersObj = users.reduce((acc, user) => {
//   acc[user._id] = user;
//   return acc;
// }, {});
// // console.log(usersObj);

// // Some/Every
// const isMale = users.some(user => user.gender === "male");
// const isAllMale = users.every(user => user.gender === "male");
// const isAll18 = users.every(user => user.age > 18);
// // console.log(isAll18);

// const user = users.find(user => user.name === "Valencia Carrillo");
// // console.log(user);

// // Sort
// const strArr = ["Denis", "Bill", "Anna"];
// strArr.sort();
// const numArr = [10, 7, 44, 32];
// numArr.sort((prev, next) => prev - next);
// users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
// console.log(users);
