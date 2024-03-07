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