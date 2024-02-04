function addRecord() {
  for (let i = 0; i < arguments.length; i++) {
    const record = arguments[i];
    for (let key in record) {
      if (record.hasOwnProperty(key)) {
        this[key] = record[key];
      }
    }
  }
};

data = {
  p: 600,
  str: 'hello',
  y: -50
};

addRecord.call(data, { x: 10 }, { y: 20 }, { z: 30, x: 50 });
addRecord.apply(data, [{ x: 10 }, { y: 20 }, { z: 30, x: 50 }]);

console.log(data.x); // 50
console.log(data.y); // 20
console.log(data.z); // 30
console.log(data.p); // 600
console.log(data.str); // 'hello'