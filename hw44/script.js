const slider = document.getElementById('slider');
const input = document.getElementById('input');
const greenLine = document.getElementById('green');
const redLine = document.getElementById('red');

function calculateCommission(value) {
  let rate = null;

  if (value < 20) rate = 0.02;
  else if (value < 50) rate = 0.04;
  else if (value < 75) rate = 0.06;
  else rate = 0.08;

  return value * rate;
}

function updateDiagram(value) {
  const intValue = parseInt(value, 10);
  const commissionValue = calculateCommission(intValue);

  input.value = intValue;
  slider.value = intValue;
  greenLine.style.height = `${intValue}px`;

  redLine.style.height = `${commissionValue}px`;
  redLine.style.bottom = `${intValue}px`;
}

slider.addEventListener('input', () => updateDiagram(slider.value));
input.addEventListener('input', () => updateDiagram(input.value));

updateDiagram(slider.value);