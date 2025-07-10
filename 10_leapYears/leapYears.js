const leapYears = function(year) {
  const hundredYear = year % 100 === 0;
  const fourHundredYear = year % 400 === 0;
  const fourYear = year % 4 === 0;
  if (fourYear && (!hundredYear || fourHundredYear)) {
    return true;
  } else {
    return false;
  };
};
console.log(leapYears(2000));
console.log(leapYears(1985));

// Do not edit below this line
module.exports = leapYears;
