let value;
let valueType;
value = String(10);
value = String(10+40);
value = (40).toString();

value = String(true);

//object
value = String({ name: 'Denis'})

value = 30 + false + undefined;
 value = Number('23');



valueType = typeof value;
console.log(value);
console.log(valueType);