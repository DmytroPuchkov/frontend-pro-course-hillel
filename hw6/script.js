// Вивести на сторінку в один рядок через кому числа від 10 до 20.
console.log('%c1. Вивести на сторінку в один рядок через кому числа від 10 до 20.', 'color: yellow; background-color: blue;');

let result = '';

for (let i = 10; i <= 20; i++) {
  if (i < 20) {
    result += i + ', ';
  } else {
    result += i;
  }
}

console.log(result);

// Вивести квадрати чисел від 10 до 20.
console.log('%c2. Вивести квадрати чисел від 10 до 20.', 'color: yellow; background-color: blue;');

for (let i = 10; i <= 20; i++) {
  console.log(`${i} * ${i} =`, i ** 2);
}

// Вивести таблицю множення на 7.
console.log('%c3. Вивести таблицю множення на 7.', 'color: yellow; background-color: blue;');

for (let i = 1; i <= 10; i++) {
  console.log(`7 * ${i} =`, i * 7);
}

// Знайти суму всіх цілих чисел від 1 до 15.
console.log('%c4. Знайти суму всіх цілих чисел від 1 до 15.', 'color: yellow; background-color: blue;');

let sumResult = 0;

for (let i = 1; i <= 15; i++) {
  sumResult += i;
}

console.log(sumResult);

// Знайти добуток усіх цілих чисел від 15 до 35.
console.log('%c5. Знайти добуток усіх цілих чисел від 15 до 35.', 'color: yellow; background-color: blue;');

let multiplResult = 1;

for (let i = 15; i <= 35; i++) {
  multiplResult *= i;
}
console.log(multiplResult);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
console.log('%c6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.', 'color: yellow; background-color: blue;');

let averageResult = 0;
let i = 1;

while (i <= 500) {
  averageResult += i;
  i++;
}

console.log(averageResult / 500);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
console.log('%c7. Вивести суму лише парних чисел в діапазоні від 30 до 80.', 'color: yellow; background-color: blue;');

let sumEvenNumbers = 0;

for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sumEvenNumbers += i;
  }
}

console.log(sumEvenNumbers);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
console.log('%c8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.', 'color: yellow; background-color: blue;');

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
console.log('%c9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.', 'color: yellow; background-color: blue;');

let number = parseInt(prompt('Введіть натуральне число (це позитивне число починаючи з 1):'));
let evenCount = 0;
let evenSum = 0;
i = 1;

if (number >= 1) {
  console.log(`Всі дільники числа ${number}:`);
  do {
    if (number % i === 0) {
      console.log(i);
      if (i % 2 === 0) {
        evenCount++;
        evenSum += i;
      }
    }
    i++;
  } while (i <= number);

} else {
  console.log('Ви ввели не натуральне число. Спробуйте ще.');
}

// Визначити кількість його парних дільників.
console.log(`%c10. Кількість парних дільників числа ${number}:`, 'color: yellow; background-color: blue;', evenCount);

// Знайти суму його парних дільників.
console.log(`%c11. Сума парних дільників числа ${number}:`, 'color: yellow; background-color: blue;', evenSum);

// Надрукувати повну таблицю множення від 1 до 10.
console.log('%c12. Надрукувати повну таблицю множення від 1 до 10.', 'color: yellow; background-color: blue;');

i = 1;

while (i <= 10) {
  console.log(`10 * ${i} =`, 10 * i);
  i++;
}
