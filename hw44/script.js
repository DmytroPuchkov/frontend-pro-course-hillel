const slider = document.getElementById('slider');
const input = document.getElementById('input');
const greenLine = document.getElementById('green');
const redLine = document.getElementById('red');

function calculateCommission(value) {
  if (value < 20) return value * 0.02;
  if (value < 50) return value * 0.04;
  if (value < 75) return value * 0.06;

  return value * 0.08;
}

function update(target, managed) {
  managed.value = target.value;
}

function updateDiagram(value) {
  const intValue = parseInt(value, 10);
  const commissionValue = calculateCommission(intValue);

  greenLine.style.height = `${intValue}px`;
  redLine.style.bottom = `${intValue}px`;
  redLine.style.height = `${commissionValue}px`;
}

slider.addEventListener('input', () => {
  update(slider, input);
  updateDiagram(slider.value);
});

input.addEventListener('input', () => {
  update(input, slider);
  updateDiagram(input.value);
});

updateDiagram(slider.value);