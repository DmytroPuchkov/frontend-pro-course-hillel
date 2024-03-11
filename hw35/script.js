// JavaScript Tips

// Arrow Function

function add(a, b) {
  return a + b;
}

const add = (a, b) => a + b;

// Array.from()

const str = "Hello!";
const arr = Array.from(str);
console.log(arr); // Output: ['H', 'e', 'l', 'l', 'o', '!']

// Display Data with console.table()

const person = {
  name: 'John', 
  age: 25,
  profession: 'Programmer'
}
console.table(person);

// Extract Object Properties with Destructuring

const person1 = {
  namePerson: 'John', 
  agePerson: 25,
  professionPerson: 'Programmer'
}

// Instead of this 👇
console.log(person1.namePerson);
console.log(person1.agePerson);

// Use this👇
const {namePerson, agePerson} = person1;
console.log(namePerson);
console.log(agePerson);

// Set Default Values with Logical OR Operator

function greet(name) {
  name = name || 'Person';
  console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Person!
greet("John"); // Output: Hello, John!

// Effortlessly Empty an Array

let numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers); // Output: []