const arr = [
  ["00", "01", "02", "03", "04", "05"],
  ["10", "11", "12", "13", "14", "15"],
  ["20", "21", "22", "23", "24", "25"],
  ["30", "31", "32", "33", "34", "35"],
  ["40", "41", "42", "43", "44", "45"],
  ["50", "51", "52", "53", "54", "55"],
];

const space = "&nbsp;&nbsp;";
const K = 3;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {

    // Дефолтне відображення матриці
    // let conditional = false;

    // 1. При змінній К = 3, повинні побачити, стовпець зірочок по індексу 3
    let conditional = j === K;

    // 2. При змінній К = 3, повинні побачити, ряд зірочок по індексу 3
    // let conditional = i === K;

    // 3. Головна діагональ матриці
    // let conditional = i === j;

    // 4. Побічна діагональ
    // let conditional = i + j === arr.length - 1;

    // 5. Нижче головної включно з нею
    // let conditional = i >= j;

    // 6. Вище головної діагоналі
    // let conditional = i < j;

    // 7. Права частина масиву по колонках
    // let conditional = j >= K;

    // 8. Перетин прямих при К = 3
    // let conditional = i === K || j === K;

    // 9. Квадрат у правому кутку матриці
    // let conditional = i < K && j >= K;

    // 10. Квадрат по центру
    // let conditional = (i >= 1 && i <= 4) && (j >= 1 && j <= 4);

    if (conditional) {
      document.write("**" + space);
      continue;
    }

    document.write(arr[i][j] + space);
  }
  document.write("<br />");
}