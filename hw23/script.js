function convert(obj, newObj = {}) {
  for (let key in obj) {
    if (obj[key]) {
      if (typeof obj[key] === 'object') {
        convert(obj[key], newObj);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  return newObj;
}

const obj = { a: 10, b: 12, c: { f: 13, g: { m: 20 } } };

console.log(convert(obj));