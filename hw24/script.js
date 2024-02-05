// Завдання 1

function renderObjectFunction() {
  for (let key in this) {
    if (key !== 'renderObject' && typeof this[key] !== 'function') {
      document.write(`<div>${key}: ${this[key]}</div>`);
    }
  }
}

const obj = {
  car: "BMW",
  type: "sedan",
  color: "black",
  renderObject: renderObjectFunction
};

obj.renderObject();

// Завдання 2

data = {
  addRecord: function () {
    for (let i = 0; i < arguments.length; i++) {
      const record = arguments[i];
      for (let key in record) {
        this[key] = record[key];
      }
    }
  },
  p: 600,
  str: 'hello',
  y: -50
}

data.addRecord({ x: 10 }, { y: 20 }, { z: 30, x: 50 });

console.log(data.x); // 50
console.log(data.y); // 20
console.log(data.z); // 30
console.log(data.p); // 600
console.log(data.str); // 'hello'