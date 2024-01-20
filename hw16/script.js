// 1. Дано масив з елементами різних типів. 
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
console.log('%cЗавдання 1','color: yellow; background-color: blue;');

const mixedArray = [2, 'a', 2, 2, 4, {car: 'BMW'}, 10, 'JS'];

function calcAverageNumbers(array) {
  let total = 0;
  let amount = 0;

  for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
      amount++;
      total += array[i];
    }
  }

  total = total / amount;

  return total;
};

const numberAverage = calcAverageNumbers(mixedArray);

console.log('Масив', mixedArray);
console.log('Середнє арифметичне чисел масиву =', numberAverage);


// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
console.log('%cЗавдання 2','color: yellow; background-color: blue;');

const x = Number(prompt('Введіть перше число:', ''));
const y = Number(prompt('Введіть друге число:', ''));
const znak = prompt('Введіть дію над числами (+, -, *, /, %, ^)', '');

function doMath(x, znak, y) {
  let result = 0;

  switch (znak) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
    case '%':
      result = x % y;
      break;
    case '^':
      result = x ** y;
      break;
  }

  return result;
}

const operation = doMath(x, znak, y);

console.log(`${x} ${znak} ${y} =`, operation);


// 3. Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
console.log('%cЗавдання 3','color: yellow; background-color: blue;');

const m = prompt('Введіть довжину основного масиву:', '');
const n = prompt('Введіть довжину внутрішніх масивів:', '');
const value = prompt('Введіть значення елементів масиву:', '');

function createArray(lengthOuterArr, lengthInnerArr, userValue) {
  const array = [];

  for (let i = 0; i < lengthOuterArr; i++) {
    array[i] = [];

    for (let j = 0; j < lengthInnerArr; j++) {
      array[i][j] = userValue;
    }
  }
  return array;
}

const userArray = createArray(m, n, value);

console.log(userArray);

// 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.
console.log('%cЗавдання 4','color: yellow; background-color: blue;');

const userString = prompt("Введіть рядок:");
const char1 = prompt("Введіть перший символ для видалення:");
const char2 = prompt("Введіть другий символ для видалення:");

function removeCharacters(string, chars) {
  let resultString = '';

  for (let i = 0; i < string.length; i++) {
    if (chars.indexOf(string[i]) === -1) {
      resultString += string[i];
    }
  }
  return resultString;
}

const output = removeCharacters(userString, [char1, char2]);
console.log(output);
