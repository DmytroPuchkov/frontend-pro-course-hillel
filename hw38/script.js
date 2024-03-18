class Person {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

class Flat {
  constructor() {
    this.residents = [];
  }
}

class House {
  constructor(maxFlats) {
    this.maxFlats = maxFlats;
    this.flats = [];
  }
}

Flat.prototype.addResident = function(person) {
  if (person instanceof Person) {
    this.residents.push(person);
  }
}

House.prototype.addFlat = function(flat) {
  if (this.flats.length < this.maxFlats) {
    if (flat instanceof Flat) {
      this.flats.push(flat);
    }
  } else {
    console.log('Недостатньо квартир');
  }
}

const person1 = new Person('Софія', 'жінка');
const person2 = new Person('Максим', 'чоловік');
const person3 = new Person('Анастасія', 'жінка');

const flat1 = new Flat();
const flat2 = new Flat();

flat1.addResident(person1);
flat2.addResident(person2);
flat2.addResident(person3);

const house = new House(10);

house.addFlat(flat1);
house.addFlat(flat2);

console.log(house);