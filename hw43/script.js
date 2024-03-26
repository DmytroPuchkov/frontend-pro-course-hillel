function updateTextarea() {
  const input1 = document.getElementById('input1').value;
  const input2 = document.getElementById('input2').value;
  const input3 = document.getElementById('input3').value;

  const currentValue = input1 + ', ' + input2 + ', ' + input3;

  const previousValue = document.getElementById('output').value;

  if (currentValue !== previousValue) {
    document.getElementById('output').value = currentValue;
  }
}

const N = 2000;

setInterval(updateTextarea, N);