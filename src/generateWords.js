const {randomInt} = require('crypto')

function generateWords(count) {
  const {words} = require("./bip39Words")
  const wordCount = words.length
  let randomWords = ""
  for (let i = 0; i < count; i++) {
    let number = randomInt(wordCount)
    randomWords += words[number] + " "
  }
  return randomWords
}

module.exports = {
  generateWords
}


