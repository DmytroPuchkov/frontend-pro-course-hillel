let number = 1234325153444;

const array = Array.from(String(number), Number);

const countNumbers = array.reduce((acc, num) => {
  acc[num] = acc[num] ? acc[num] + 1 : 1;
  return acc;
}, {});

const luckyNumbers = Object.keys(countNumbers).reduce((acc, num) => {
  if (countNumbers[num] === Number(num)) {
    acc.push(num);
  }
  return acc;
}, []);

console.log(countNumbers);
console.log(luckyNumbers);