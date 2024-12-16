const convertToCelsius = function(fahrenheit) {
  let c = 0
 
  c = 5/9 * (fahrenheit - 32)
  
  return parseFloat(c.toFixed(1)) // converts to number


 
};

const convertToFahrenheit = function(celsius) {
let f = 0

f = (9/5 * celsius) + 32
return parseFloat(f.toFixed(1))

};








// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
