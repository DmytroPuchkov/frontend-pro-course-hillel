const slider = document.getElementById('slider');
const input = document.getElementById('input');
const greenLine = document.getElementById('green');
const redLine = document.getElementById('red');

function calculateCommission(value) {
  if (value < 20) return 2;
  if (value < 50) return 4;
  if (value < 75) return 6;
  return 8;
}

function updateDiagram (value) {
  const intValue = parseInt(value, 10);
  const commissionPercentage = calculateCommission(intValue);
  const commissionValue = (intValue * commissionPercentage) / 100;

  input.value = intValue;
  slider.value = intValue;
  greenLine.style.height = `${intValue}px`;

  redLine.style.height = `${commissionValue}px`;
  redLine.style.bottom = `${intValue}px`;
}

slider.addEventListener('input', () => updateDiagram(slider.value));
input.addEventListener('input', () => updateDiagram(input.value));

updateDiagram(slider.value);