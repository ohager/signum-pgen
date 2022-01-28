const {version} = require('../package.json')
const {program, InvalidArgumentError} = require('commander')
const {generate} = require("./generate");

const app = program
  .version(version)
  .description(`
            @@@@@@@@  @@@@@@@           
         @@@@@    @@@@@    @@@@@        
           @@@  @@@  @@@ @@@@@          
    @@@      @@@@@     @@@@       @@@   
  @@@@@@@@ &@@@  @@@@@@@@ @@@@  @@@@@@@ 
 @@@    @@@@       @@@      @@@@@    @@@
 @@@  @@@ *@@@@           @@@  @@@  @@@@
   @@@@@     @@@         @@@     @@@@@  
 @@@@  @@@  @@@           @@@@  @@@  @@@
 @@@    @@@@@      @@@       @@@@    @@@
  @@@@@@@  @@@  @@@@@@@@  @@@  @@@@@@@@ 
    @@@       @@@@     @@@@@      @@@   
           @@@@  @@@  @@@  @@@          
         @@@@@    @@@@@    @@@@@        
            @@@@@@@  @@@@@@@@    
 
               Signum PGen          
      
  Author: ohager
  Version: ${version}
  `)


const validateNumber = (minAllowed, maxAllowed) => value => {
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue)) {
    throw new InvalidArgumentError('Not a number.');
  }
  if (parsedValue < minAllowed) {
    throw new InvalidArgumentError(`Number must not less than ${minAllowed}`);
  }
  if (parsedValue > maxAllowed) {
    throw new InvalidArgumentError(`Number must not greater than ${maxAllowed}`);
  }
  return parsedValue;
};

program
  .version(version)
  .description('Generate passphrases on in masses')
  .argument('<count>', 'Number of phrases to be generated', validateNumber(1, 10000))
  .option('-o, --out <outfile>', 'The name of the file where the passphrase are written to')
  .option('-w, --words <wordcount>', 'Outputs passphrases based on a word list', validateNumber(12, 64), "12")
  .option('-c, --chars <charcount>', 'Outputs as passwords using chars', validateNumber(12, 64), "32");

(() => {
  program.parse()
  generate({
    args: program.args,
    ...program.opts()
  })
})()
