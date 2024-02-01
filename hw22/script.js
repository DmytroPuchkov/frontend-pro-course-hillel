// Завдання 1-2
console.log('Завдання 1-2');

function assignObjects1() {
  const result = {};

  for (let i = 0; i < arguments.length; i++) {
    const obj = arguments[i];

    for (let key in obj) {
      result[key] = obj[key];
    }
  }

  return result;
}

console.log("Будь-яку кількість обʼєктів поєднуємо в один:", assignObjects1({ x: 10, y: 20 }, { z: 30 }));
console.log('Беремо властивість другого обʼєкту:', assignObjects1({ x: 10 }, { x: 20, y: 30 }));

// Завдання 3-4
console.log('Завдання 3-4');

function assignObjects2(obj1, obj2, flag = false) {
  const result = {};

  for (let key in obj1) {
    result[key] = obj1[key];
  }

  for (let key in obj2) {
    if (flag === true && key in result) {
      continue;
    }
    result[key] = obj2[key];
  }

  return result;
}

console.log('flag = true:', assignObjects2({ a: 12, b: 3 }, { a: 13, h: 0 }, true));
console.log('flag = false:', assignObjects2({ a: 12, b: 3 }, { a: 13, h: 0 }));

