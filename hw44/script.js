const slider = document.getElementById('slider');
const input = document.getElementById('input');
const greenLine = document.getElementById('green');
const redLine = document.getElementById('red');

function calculateCommission(value) {
  const rate = value < 20 ? 0.02 : value < 50 ? 0.04 : value < 75 ? 0.06 : 0.08;

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