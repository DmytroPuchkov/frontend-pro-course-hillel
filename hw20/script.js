function pow(num, degree) {
  if (degree === 1) {
    return num;
  } else {
    return num * pow(num, degree - 1);
  }
}

const num = 2;
const degree = 9;
const result = pow(num, degree);

console.log(`${num} в ${degree} ступені дорівнює`, result);