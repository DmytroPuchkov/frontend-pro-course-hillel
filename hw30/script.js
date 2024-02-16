function cachebleProcess(cb) {
  const cache = {};

  return function (arg) {
    if (!(arg in cache)) {
      cache[arg] = cb(arg);
      console.log('calculate =>', cache[arg]);
    } else {
      console.log('receive value from cache =>', cache[arg]);
    }
    
    return cache[arg];
  }
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const memoFactorial = cachebleProcess(factorial);

memoFactorial(3);
memoFactorial(3);