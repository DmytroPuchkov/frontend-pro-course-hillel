function Person(name, age) {
  this.name = name;
  this.age = age;

  this.showInfo = function() {
    console.log(`Їмʼя: ${this.name}, вік: ${this.age}.`);
  };
}

function Car(brand, model, year, number) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.number = number;

  this.setOwner = function(person) {
    if (person.age >= 18) {
      this.owner = person;
    } else {
      console.log(`${person.name} ще немає 18 років.`);
    }
  };

  this.showInfo = function() {
    console.log(`Бренд: ${this.brand}, модель: ${this.model}, рік випуску: ${this.year}, номер: ${this.number}.`);
    if (this.owner) {
      this.owner.showInfo();
    } else {
      console.log("Автівка немає власника.");
    }
  }
}

console.log('Випадок 1');

const person1 = new Person("Сергій", 17);
const car1 = new Car("BMW", "M3", 2017, "АА7777ХХ");
car1.setOwner(person1);
car1.showInfo();

console.log('Випадок 2');

const person2 = new Person("Надія", 24);
const car2 = new Car("Dodge", "Viper", 2008, "КА1001АН");
car2.setOwner(person2);
car2.showInfo();