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
