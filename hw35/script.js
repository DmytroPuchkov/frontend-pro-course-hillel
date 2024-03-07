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
