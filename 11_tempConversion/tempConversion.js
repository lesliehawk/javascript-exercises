
// °F to °C (num − 32) * (⁠5/9)
const convertToCelsius = function(tempF) {
  const tempC = ((tempF - 32) * 5 / 9);
  return tempC;
};

// °C to °F (num * ⁠(9/5) + 32)
const convertToFahrenheit = function(tempC) {
  const tempF = ((tempC * 9 / 5) + 32);
  return tempF;
};


console.log(convertToCelsius(32)) // fahrenheit to celsius, should return 0°C
console.log(convertToFahrenheit(0)) // celsius to fahrenheit, should return 32°F


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
