const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let depth = 1;

    function recursive(array) { 
      array.forEach(element => {
        if (typeof element === 'object') {
          depth = depth + 1;
          return recursive(element);
        } else {
          return depth;
        }
      });
  
    };

    recursive(arr);

    return depth;
  }
};
