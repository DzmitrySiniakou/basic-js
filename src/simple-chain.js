const CustomError = require("../extensions/custom-error");

const chainMaker = {
  outputChain: [],

  getLength() {
      return this.outputChain.length;
  },

  addLink(value = "()") {
    this.outputChain.push(value);
    return this;
  },

  removeLink(position) {
    this.outputChain.splice(position - 1, 1);
    return this
  },

  reverseChain() {
    this.outputChain.reverse();
    return this
  },

  finishChain() {
    let chain = ""
    for (let link of this.outputChain) {
      chain = `${chain}( ${link} )~~`;
    }
    this.outputChain = []
    return chain.slice(0, -2)
  }
};

module.exports = chainMaker;


