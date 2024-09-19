const convertToCelsius = function(temp) {
  // Formula: x °F ≘ (x − 32) × ⁠5/9
  return Math.round(10*(temp - 32) * (5/9))/10;
};

const convertToFahrenheit = function(temp) {
  // Formula: (x* 9/5 + 32)
  return Math.round(10*(temp * (9/5) + 32))/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
