require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(array, depth = 1, arrDepth = []) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
      arrDepth.push(depth);

      array.forEach(element => {
        if (Array.isArray(element)) {
          this.calculateDepth(element, depth + 1, arrDepth);
        }
      });

      let output = Math.max(...arrDepth);
      return output;
    };
};