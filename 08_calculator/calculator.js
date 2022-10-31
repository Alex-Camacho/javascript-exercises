const add = function(a, b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
  const initialValue = 0;
	const sumArray = array.reduce((a, b) => a + b, initialValue);
  return sumArray;
};

const multiply = function(array) {
  const initialValue = 1;
	const multArray = array.reduce((a, b) => a * b, initialValue);
  return multArray;
};

const power = function(a,b) {
  return a ** b;
	
};

const factorial = function(a) {
	let result = 1;
  for (i = a; i > 1; i-- )
    result *= i;
  return result;  
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
