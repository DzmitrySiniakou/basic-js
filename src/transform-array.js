const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!arr || arr == undefined) throw new Error(err);

  let outputArr = [];
  let helper = [];

  for ( let i = 0; i < arr.length; i++){
    switch(arr[i]){
      case "--discard-next": {
        break
      }
      case "--discard-prev": {
        break
      }
      case "--double-next": {
        break
      }
      case "--double-prev": {
        break
      }
      default:
        outputArr.push(arr[i]);
        break
    }
  }
  // console.log(outputArr);
  return outputArr;
};
