const firstName = 'Denis';
const lastName = 'Mescheryakov';
const age = 30;
const str = 'Hello my name is Denis';

let value;

value = firstName + lastName;

value = firstName + ' ' + lastName;

value += ' I am ' + age;



value = firstName.length;

value = firstName[2];
value = firstName[4];
value = lastName[lastName.length - 1];
value = firstName[firstName.length - 1];
value = firstName.toUpperCase();
value = firstName.concat(' ', lastName);
console.log(value);
value = str.indexOf('n', 10);
value = str.indexOf('!');
value = str.includes('DENIS');

value = str.slice(0, 5);
value = str.slice(0, -3);

value = str.replace('Denis', 'Den');


