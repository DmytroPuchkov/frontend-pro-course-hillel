// JavaScript Tips

// Arrow Function

function add(a, b) {
  return a + b;
}

const add = (a, b) => a + b;

// Array.from()

const str = "Hello!";
const arr = Array.from(str);
console.log(arr); //Output: ['H', 'e', 'l', 'l', 'o', '!']

// JSON.parse()

const jsonStr = '{"name": "John", "age": 25}';
const person3 = JSON.parse(jsonStr);
console.log(person3); // Output: {name: 'John', age: 25}

// Object.freeze()

const person7 = {
  name: 'John', 
  age: 25
};

Object.freeze(person7);

person7.name = "Mark";

console.log(person7); // Output: {name: 'John', age: 25}
