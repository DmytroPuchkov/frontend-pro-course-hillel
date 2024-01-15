const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
  let randomSymbols = '';
  let randomPosition = 0;

  for (i = 0; i < length; i++) {
    randomPosition = Math.floor(Math.random() * characters.length);
    randomSymbols += characters.charAt(randomPosition);

    // console.log(`position:`,randomPosition, `symbol:`,randomSymbols[i]);
  }

  return randomSymbols;
}

const key = generateKey(16, characters);
console.log(key);





