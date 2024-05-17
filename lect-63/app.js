// урок 63 введение в ооп
// const str = new String("Hello world");
// console.log("str = ", str);

// function Product(brand, price, discount) {
//   this.brand = brand;
//   this.price = price;
//   this.discount = discount;
//   this.getPriceWithDiscount = function () {
//     return (this.price * (100 - this.discount)) / 100;
//   };
//   // console.log("this = ", this);
// }

// const apple = new Product("Apple", 100, 15);
// const samsung = new Product("Samsung", 200, 25);
// console.log("apple = ", apple);
// console.log("samsung = ", samsung);
// console.log(
//   "samsung.getPriceWithDiscount() = ",
//   samsung.getPriceWithDiscount()
// );
// console.log("apple.getPriceWithDiscount() = ", apple.getPriceWithDiscount());
// console.log("apple instanceof Product = ", apple instanceof Product);
// console.log("[] instanceof Array = ", [] instanceof Array);

// ============================================
// =============================================
// 64 . prototype es5
// function Product(brand, price, discount) {
//   this.brand = brand;
//   this.price = price;
//   this.discount = discount;
//   // console.log("this = ", this);
// }

// Product.prototype.getPriceWithDiscount = function () {
//   return (this.price * (100 - this.discount)) / 100;
// };

// Product.prototype.setPrice = function (newPrice) {
//   this.price = newPrice;
// };

// const apple = new Product("Apple", 100, 15);
// const samsung = new Product("Samsung", 200, 25);

// console.log("[]  = ", [] );
// console.log("apple = ", apple);
// console.log(apple);
// console.log('apple.hasOwnProperty("brand") =', apple.hasOwnProperty("brand"));

// apple.setPrice(500);
// console.log("apple = ", apple);
// console.log("apple.getPriceWithDiscount() = ", apple.getPriceWithDiscount());

//================
//---------------
//65. наследование ES5,

// Object.create

// const protoForObj = {
//   sayHello() {
//     return "Hello world";
//   },
// };

// const obj = Object.create(protoForObj, {
//   firstName: {
//     value: "Denis",
//   },
// });

// console.log("obj = ", obj);
// console.log("obj.sayHello() = ", obj.sayHello());
// console.log("obj.sayHello = ", obj.sayHello);

// function User(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   // this.sayHello = function () {
//   //   return `Hello ${this.firstName} ${this.lastName}`;
//   // };
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// User.prototype.sayHello = function () {
//   return `Hello ${this.firstName} ${this.lastName}`;
// };

// const user = new User("Seva", "Bogdanov");

// console.log("user = ", user);
// console.log("user.getFullName() = ", user.getFullName());
// console.log("user.sayHello() = ", user.sayHello());

// Customer
// function Customer(firstName, lastName, membership) {
//   User.apply(this, arguments);

//   this.membership = membership;
// }

// Customer.prototype = Object.create(User.prototype);
// Customer.prototype.constructor = Customer;

// Customer.prototype.getMembership = function () {
//   return this.membership.toUpperCase();
// };

// const customer = new Customer("Ivan", "Ivanov", "basic");
// console.log("customer = ", customer);
// console.log("customer.sayHello() = ", customer.sayHello());
// console.log("customer.getMembership() = ", customer.getMembership());

// =========================
//========================

// 66. классы ES6,

// class ProductES {
//   constructor(brand, price, discount) {
//     this.brand = brand;
//     this.price = price;
//     this.discount = discount;
//   }

//   getPriceWithDiscount = function () {
//     return (this.price * (100 - this.discount)) / 100;
//   };

//   ['setPrice'](newPrice) {
//     this.price = newPrice;
//   }

//   static plus(x, y) {
//     return x + y;
//   }
// }

// const newProduct = new ProductES("Samsung", 200, 10);
// console.log("newProduct = ", newProduct);
// newProduct.setPrice(300);
// console.log("newProduct = ", newProduct);
// console.log("newProduct.plus(1, 2) = ", newProduct.plus(1, 2));
// console.log("ProductES.plus(1, 2) = ", ProductES.plus(1, 2));

// console.log("Date.now() = ", Date.now());
// const date = new Date;
// console.log("date = ", date);
// newProduct.setPrice(400);

// function Product(brand, price, discount) {
//   this.brand = b//   this.price = price;
//   this.discount = discount;
//   this.getPriceWithDiscount = function () {
//     return (this.price * (100 - this.discount)) / 100;
//   };
//   // console.log("this = ", this);
// }rand;

// =================
// Наследование ES6..

class UserES {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class CustomerES extends UserES {
  constructor(firstName, lastName, membership) {
    super(firstName, lastName);
    this.membership = membership;
  }

  getFullName() {
    // console.log("super.getFullName() = ", super.getFullName());
    const parentRes = super.getFullName();
    return `${parentRes}, membership: ${this.membership}`;
    // return '1'
  }
}

const customerEs = new CustomerES('Seva', 'Bogdanov', 'basic');
console.log("customerEs = ", customerEs);
console.log("customerEs.getFullName() = ", customerEs.getFullName());
