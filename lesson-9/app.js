const user = {
  firstName: 'Denis',
  age: 30,
  isAdmin: true,
  email: 'test@test.com',
  'user-address': {
    city: 'Kharkiv'
  },
  skills: ['html', 'css', 'js']
};

let value;
let prop = 'skills';

// value = user.firstName;
// value = user['isAdmin'];
// value = user['user-address'];
// value = user['user-address'].city;
// value = user['user-address']['city'];

// value = user[prop][0];

user.firstName = 'Den';
// value = user.firstName;
user.info = 'Some info';
user['user-address'].city = 'Kiev';
user['user-address'].country = 'Ukraine';

user.plan = {};
user.plan.basic = 'basic';
value = user.info;

// console.log(user);
// console.log(user.plan);
// console.log(prop);
// console.log(value);


// задачи: 



// Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.


// 1. Создать объект с полем product, равным ‘iphone’
const myObject = {
  product: 'iphone',
};

// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
myObject.price = 1000;
myObject.currency = `dollar`;

// 3. Добавить поле details, которое будет содержать объект с полями model и color
myObject.details = {model: undefined, color: undefined};
// myObject.details.model = undefined;
// myObject.details.color = undefined;

console.log(myObject);























