let studentInfo = undefined;
let studentAge = undefined;
let averageAge = undefined;

console.log(`**************`);
console.log(`Список студентів, що зареєструвалися на вебінар:`);

studentInfo = prompt('Введіть ваш вік, імʼя та прізвище:', '');
console.log(`1. ${studentInfo}`);

studentAge = parseInt(studentInfo);

studentInfo = prompt('Введіть ваш вік, імʼя та прізвище:', '');
console.log(`2. ${studentInfo}`);

studentAge += parseInt(studentInfo);

studentInfo = prompt('Введіть ваш вік, імʼя та прізвище:', '');
console.log(`3. ${studentInfo}`);

studentAge += parseInt(studentInfo);

console.log(`--------------`);

averageAge = parseInt(studentAge / 3);
console.log(`Середній вік студента: ${averageAge}`);

console.log(`--------------`);
console.log(`**************`);