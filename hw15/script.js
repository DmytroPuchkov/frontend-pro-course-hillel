const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
  let randomSymbols = '';
  let randomIndex = 0;

  for (i = 0; i < length; i++) {
    randomIndex = Math.floor(Math.random() * characters.length);
    randomSymbols += characters.charAt(randomIndex);

    // console.log(`index:`,randomIndex, `symbol:`,randomSymbols[i]);
  }

  return randomSymbols;
}

const key = generateKey(16, characters);
console.log(key);





