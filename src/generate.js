const {generateWords} = require("./generateWords");
const {generateChars} = require("./generateChars");
const {format} = require('@fast-csv/format');
const {join} = require("path");

const ModeMap = {
  words: generateWords,
  chars: generateChars
}

function generate(count, length, options) {
  const generator = ModeMap[options.mode];
  let outstream = process.stdout
  if (options.out) {
    const {createWriteStream} = require("fs")
    const {join,isAbsolute} = require("path")
    const path = isAbsolute(options.out) ? options.out : join(process.cwd(), options.out)
    console.info("Writing to", path)
    outstream = createWriteStream(path)
  }
  const csvFormat = format().pipe(outstream)
  for (let i = 0; i < count; ++i) {
    const generated = generator(length)
    csvFormat.write(generated)
  }
  csvFormat.end()
}

module.exports = {
  generate
}
