const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((accum, current) => accum + current, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, current) => accumulator * current);
};

const power = function(a, n) {
  return a**n;
	
};

const factorial = function(a) {
  let result = 1;
  if ( a === 0 ) {
    return result;
  } else {
    for (let i = 1; i <= a; i++ ) {
      result *= i;
    }
    return result;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
