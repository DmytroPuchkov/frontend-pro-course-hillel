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

// Map() Function

const numbers3 = [1, 2, 3, 4];
const doubled3 = numbers3.map(num => num * 2);

console.log(numbers3); // Output: [1, 2, 3, 4]
console.log(doubled3); // Output: [2, 4, 6, 8]

// Object.seal()

const person5 = {
  name: 'John', 
  age: 25
};

Object.seal(person5);

person.profession = "Programmer";

console.log(person5); // Output: {name: 'John', age: 25}