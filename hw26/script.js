const obj = {
  result: '',

  copy(buffer) {
    this[buffer] = this.result;
    return this;
  },
  clear() {
    this.result = 0;
    return this;
  },
  doFunction(func, x, y) {
    this.result = func(x, y);
    return this;
  },
  target(property) {
    this.doFunction = function(func, x, y) {
      this[property] = func(x, y);
      return this;
    };
    this.clear = function() {
      this[property] = 0;
      return this;
    };
    return this;
  }
};

function sum(x, y) {
  return x + y;
}

function mul(x, y) {
  return x * y;
}

obj.doFunction(sum, 6, 8);
console.log(obj.result); // 14

obj.doFunction(mul, 10, 10); 
console.log(obj.result); // 100

obj.doFunction(sum, 6, 8).doFunction(mul, 10, 10).clear();
console.log(obj.result); // 0

obj.doFunction(mul, 5, 5).copy('mul_res');
console.log(obj.mul_res); // 25

obj.doFunction(sum, 2, 4).copy('sum_res').target('summary').doFunction(sum, 2, 4);
console.log(obj.summary); // 6

obj.clear();
console.log(obj.summary); // 0