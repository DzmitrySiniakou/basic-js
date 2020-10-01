const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (date === undefined || date == 0) return 'Unable to determine the time of year!';

  try {
    date.getTime();
  }
  catch (err) {
    throw new Error(err);
  }

  let month = date.getMonth();
  if (month < 2 || month == 11){
    return 'winter';
  }
  else if (month < 5){
    return 'spring';
  }
  else if (month < 8){
    return 'summer';
  }
  else {
    return 'autumn';
  }
    throw new Error();
}