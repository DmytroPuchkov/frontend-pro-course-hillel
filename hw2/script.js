let forceValue = prompt('Введіть значення сили F', '');
let massValue = prompt('Введіть значення маси m', '');

let accelerationValue = forceValue / massValue; 

document.write(`
  <p>**************</p>
  <p>Прискорення тіла при силі F = ${forceValue}, та масі m = ${massValue}:</p>
  <p>--------------------</p>
  <p>a = ${accelerationValue}</p>
  <p>-------------------</p>
  <p>end.</p>
`);