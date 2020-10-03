const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machine = true) {
    this.machine = machine
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    this.alphabetLength = this.alphabet.length
  }

  encrypt(message, key) {
    return this.crypt(message, key, "encrypt")
  }

  decrypt(encryptedMessage, key) {
    return this.crypt(encryptedMessage, key, "decrypt")
  }
}

module.exports = VigenereCipheringMachine;
