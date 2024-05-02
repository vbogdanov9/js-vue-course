function getThis() {
  console.log(this);
}
// getThis();
// window.getThis();
// console.log(window.getThis);

function getPrice(currency = "$") {
  console.log(currency + this.price);
  return this;
}

function getName() {
  console.log(this.name);
  return this;
}

const prod1 = {
  name: "Intel",
  price: 100,
  getPrice,
  getName() {
    console.log(this.name);
  },
  info: {
    information: ["2.3ghz"],
    getInfo: function () {
      console.log(this);
    },
  },
};
// prod1.getPrice();
// prod1.info.getInfo();
// prod1.getName();

const prod2 = {
  name: "AMD",
  price: 50,
  getPrice,
};

prod2.getName = prod1.getName;
// prod2.getPrice();

// prod2.getName();

let str = "Hello world";
const reversStr = str
  .split("") // ['H', 'e'...]
  .reverse() // ['d', 'l'...]
  .join(""); // 'dlrow olleH'
// console.log(reversStr);

const prod3 = {
  name: "ARM",
  price: 200,
  getPrice,
  // getName,
};

// getPrice.call(prod3, '*');
// getPrice.apply(prod3, ['*']);

// prod3
//   .getName() // prod3
//   .getPrice(); // prod3.getPrice()

const getPriceBind = prod3.getPrice.bind(prod3, "*");
// console.log(getPriceBind);
// setTimeout(getPriceBind, 1000);

// Вопросы к этому заданию
// Создать объект, который описывает ширину и высоту

// прямоугольника, а также может посчитать площадь фигуры:

// const rectangle = {width:..., height:..., getSquare:...};

// мое решение:

// const rectangle = {
//   width:50,
//   height:20,
//   getSquare,
// };

// function getSquare() {
//   console.log(this.width*this.height);
//   return this;
// }

// rectangle.getSquare();

// правильное:

// можно фуекцию выписать отельно:
// function getSquare() {
//   return this.width * this.height;
// }

const rectangle = {
  width: 10,
  height: 10,
  // getSquare,
  getSquare() {
    return this.width * this.height;
  },
};

// console.log(rectangle.getSquare());

// Создать объект, у которого будет цена товара и его скидка, а также

// два метода: для получения цены и для расчета цены с учетом скидки:

const price = {
  price: 10,
  discount: "15%",
  getPrice() {
    return this.price;
  },
  getPriceWithDiscount() {
    return (parseFloat(this.price) * (100 - parseFloat(this.discount))) / 100;
  },
};

// console.log(price.getPrice()); // 10
// console.log(price.getPriceWithDiscount()); // 8.5

//=========================

// Создать объект, у которого будет поле высота и метод “увеличить

// высоту на один”. Метод должен возвращать новую высоту:

// object.height = 10;

// object.inc(); // придумать свое название для метода

// object.height; // 11;

const myObject = {
  height: undefined,
  incHeight() {
    return ++this.height;
  },
};

// myObject.height = 10;
// console.log(myObject.height); //10

// myObject.incHeight();
// console.log(myObject.height); //11

// console.log(myObject.incHeight()); //12


// Создать объект “вычислитель”, у которого есть числовое свойство

// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.

// Методы можно вызывать через точку, образуя цепочку методов:

const numerator = {
value: 1,
double() {
  this.value*=2;
  return this},
plusOne() {
  ++this.value;
  return this;},
minusOne() {
  --this.value;
  return this;},
}

numerator.double().plusOne().plusOne().minusOne();
// let res = numerator.double().plusOne();

// numerator.value // 3
// console.log(numerator.value);

//====================

// Создать объект с розничной ценой и количеством продуктов.

// Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)

const prod = {
  price: 100,
  counts: 50,
  getTotalPrice() {
    return this.price*this.counts;
  }
};

// console.log(prod.getTotalPrice());



// Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.

// Для этого “позаимствуйте” метод из предыдущего объекта.

const anotherProd = {
  price: 20,
  counts: 10,
}

res = prod.getTotalPrice.call(anotherProd)
// console.log(res);


// 7. Даны объект и функция:

let sizes = {width: 5, height: 11},

getSquare = function () {return this.width * this.height};

// Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes

res = getSquare.call(sizes);
// console.log(res);


// 8.

let element = {
  height: 25,
  getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight;

res = getElementHeight(); // undefined
console.log(res);

// Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.
getElementHeight = element.getHeight.bind(element);
res = getElementHeight(); // undefined
console.log(res);



