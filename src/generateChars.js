const {randomInt} = require('crypto')

function generateChars(count) {
  const Alphabet = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjklmnpqrstuvwxyz"
  let randomChars = ""
  for (let i = 0; i < count; i++) {
    randomChars += randomInt(Alphabet.length);
  }
  return randomChars;
}

module.exports = {
  generateChars
}
