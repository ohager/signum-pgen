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


function validateNumber(value) {
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue)) {
    throw new InvalidArgumentError('Not a number.');
  }
  if (parsedValue < 12) {
    throw new InvalidArgumentError('Number must not less than 12');
  }
  return parsedValue;
}

program
  .description('Generate passphrases on in masses')
  .option('-o, --out <outfile>', 'The name of the file where the passphrase are written to')
  .option('-w, --words <wordcount>', 'Outputs passphrases based on a word list', validateNumber, "12")
  .option('-c, --chars <charcount>', 'Outputs as passwords using chars', validateNumber, "32");

(() => {
  program.parse()
  generate(program.opts())
})()
