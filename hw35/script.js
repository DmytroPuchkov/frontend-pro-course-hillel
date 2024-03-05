// JavaScript Tips

// Arrow Function

function addFunc(a, b) {
  return a + b;
}

const add = (a, b) => a + b;

console.log(add(4, 8));

// Arra.from()

const str = "Chipi chipi chapa chapa"
const arr = Array.from(str);

console.log(arr);

// Display Data with console.table()

const hero1 = {
  heroName: 'Kai',
  heroClass: 'Mag',
  health: 100,
}

console.table(hero1);

// Extract Object Properties with Destructuring

const hero2 = {
  heroName: 'Logan',
  heroClass: 'Bard',
  health: 80,
}

// Instead of this
console.log(hero2.heroName);
console.log(hero2.heroClass);

// Use this
const { heroName, heroClass } = hero2;
console.log(heroName);
console.log(heroClass);

// JSON.parse()

const jsonStr = '{"name": "John", "age": 25}';
const person = JSON.parse(jsonStr);
console.log(person);

// Map() Function

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

console.log(numbers);
console.log(doubled);

// Object.seal()

const person2 = {
  name: 'John',
  age: 25
}

Object.seal(person2);

person.profession = "Programmer";

console.log(person2);

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

// Swap values using Destructuring

let x = 7;
let y = 13;

[x, y] = [y, x];

console.log(x);

// Template Interpolation

const userName = 'John';
const message = `Hello, ${userName}!`;

// Ternary Operator

const age = 20;

//Instead of this
if (age >= 18) {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}

//Use this
age >= 18 ? console.log("You can drive") : console.log("You cannot drive");