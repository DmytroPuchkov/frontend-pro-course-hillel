class SuperMath {
  static operation = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '/': (x, y) => x / y,
    '*': (x, y) => x * y,
    '%': (x, y) => x % y,
  }

  constructor() {
  }

  check(obj) {
    const question = confirm(`Ви хочете зробити дію ${obj.znak} з ${obj.X} та ${obj.Y}?`);

    if (question) {
      this.#doCalculate(obj);
    } else {
      this.#doInput();
    }
  }

  #doCalculate(obj) {
    if (obj.znak in SuperMath.operation) {
      console.log(`Результат = ${SuperMath.operation[obj.znak](obj.X, obj.Y)}`);
    } else {
      console.log('Недійсна операція!');
    }
  }

  #doInput() {
    const obj = {
      X: +prompt('Введіть X'),
      Y: +prompt('Введіть Y'),
      znak: prompt('Введіть операцію (+, -, /, *, %)'),
    };

    this.#doCalculate(obj);
  }
}

const p = new SuperMath();
const obj = {X: 12, Y: 3, znak: "/"};

p.check(obj);