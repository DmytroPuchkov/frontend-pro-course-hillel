// JavaScript Tips

// Arrow Function

function addFunc(a, b) {
  return a + b;
}

const add = (a, b) => a + b;

console.log(add(4, 8));

// Object.seal()

const person2 = {
  name: 'John',
  age: 25
}

Object.seal(person2);

person.profession = "Programmer";

console.log(person2);

// Swap values using Destructuring

let x = 7;
let y = 13;

[x, y] = [y, x];

console.log(x);

// Object.freeze()

const person3 = {
  name: 'John',
  age: 25
}

Object.freeze(person3);

person.name = "Mark";

console.log(person3);

// Remove Array Duplicates

const arrWithDuplicates = [1, 12, 2, 13, 4, 4, 13];
const arrWithoutDuplicates = [...new Set(arrWithDuplicates)];

console.log(arrWithoutDuplicates);
