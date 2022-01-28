const {generateWords} = require("./generateWords");
const {generateChars} = require("./generateChars");

function generate(opts) {
  const count = opts.args[0]
  const generator = opts.words ? generateWords : generateChars
  const length = opts.words || opts.chars
  for (let i = 0; i < count; ++i) {
    console.log(generator(length))
  }
}

module.exports = {
  generate
}
