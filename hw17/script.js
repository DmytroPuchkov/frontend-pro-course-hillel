function metricsDecorator(originalFunction) {
  return function () {
    let t0 = performance.now();
    originalFunction();
    let t1 = performance.now();

    return t1 - t0;
  };
}

someFunctionCallback = () => {
  let sum = 0;
  let i = 0;
  for (; i < 1e8; i++) {
    sum += i;
  }
  console.log(sum, i);
}

const analysePerfomace = metricsDecorator(someFunctionCallback);
const time = analysePerfomace();

console.log(time + " мілісекунд витрачається на виконання функції");