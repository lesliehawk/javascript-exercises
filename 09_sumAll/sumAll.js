
// // while loop:
// const sumAll = function(start, end) {
//   let sum = 0
//   while (start <= end) {
//     sum += start;
//     start++;
//   }
//   return sum;
// };

// // for loop:
const sumAll = function(start, end) {
  let sum = 0;
  for (start; start <= end; start++){
    sum += start;
  }
  return sum;
}

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
