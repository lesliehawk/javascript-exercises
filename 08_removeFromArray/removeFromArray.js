// const removeFromArray = function(arr, elem) {
//   const index = arr.indexOf(elem)
//   return arr.splice(index, 1)
// };

const removeFromArray = function(arr, elem) {
  arr.splice((arr.indexOf(elem)), 1)
  return arr;
};

console.log(removeFromArray([1, 2, 3, 4], 3));
// Do not edit below this line
module.exports = removeFromArray;
