// const reverseString = function(str) {
//   const splitStr = str.split('').reverse().join('');
//   return splitStr;
// };

// refactored
const reverseString = function(str) {
  return str.split('').reverse().join('');
};

console.log(reverseString('hello there') == 'ereht olleh');

// Do not edit below this line
module.exports = reverseString;
