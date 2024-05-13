const elements = {
  0: true,
  1: true,
  2: false,
  3: true,
  4: false,
  5: true,
  6: false,
  7: true,
  8: false
};

function chainPromise(element) {
  return new Promise((resolve, reject) => {
    console.log(element);
   
    if (elements[element]) {
      resolve(element);
    } else {
      reject(element);
    }
  });
}

chainPromise(0)
  .then(() => chainPromise(1))
  .then(() => chainPromise(3))
  .then(() => chainPromise(6))
  .catch(() => chainPromise(8))
  .catch(() => console.log('Виконано 0 1 3 6 8'))
  .catch(error => console.log("Помилка 0 1 3 6 8:", error));

chainPromise(0)
  .then(() => chainPromise(2))
  .catch(() => chainPromise(3))
  .then(() => chainPromise(6))
  .catch(() => chainPromise(7))
  .then(() => console.log('Виконано 0 2 3 6 7'))
  .catch(error => console.log("Помилка 0 2 3 6 7:", error));