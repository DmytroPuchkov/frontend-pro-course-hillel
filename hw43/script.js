function updateTextarea() {
  const inputs = [...document.querySelectorAll('#input1, #input2, #input3')];
  const output = document.getElementById('output');
    
  return () => {
    const currentValue = inputs.map(input => input.value).join(', ');
    const previousValue = output.value;

    if (currentValue !== previousValue) {
        output.value = currentValue;
    }   
  }
}

const N = 2000;

setInterval(updateTextarea(), N);