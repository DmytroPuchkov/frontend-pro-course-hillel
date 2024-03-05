let number = 1234325153444;

const setNumberToArray = (number) => Array.from(String(number), Number);

const getCountNumbers = (array) =>
  array.reduce((acc, num) => {
    acc[num] = acc[num] ? acc[num] + 1 : 1;
    return acc;
  }, {});

const getLuckyNumbers = (countNumbers) =>
  Object.keys(countNumbers).reduce((acc, num) => {
    if (countNumbers[num] === Number(num)) {
      acc.push(num);
    }
    return acc;
  }, []);

const array = setNumberToArray(number);
const countNumbers = getCountNumbers(array);
const luckyNumbers = getLuckyNumbers(countNumbers);

console.log("Підрахунок чисел:", countNumbers);
console.log("Щасливі числа:", luckyNumbers);