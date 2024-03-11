// JavaScript Tips

// Arrow Function

function add(a, b) {
  return a + b;
}

const add = (a, b) => a + b;

// Object.freeze()

const person7 = {
  name: 'John', 
  age: 25
};

Object.freeze(person7);

person7.name = "Mark";

console.log(person7); // Output: {name: 'John', age: 25}