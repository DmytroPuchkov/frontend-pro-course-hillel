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