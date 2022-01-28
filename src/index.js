const {version} = require('../package.json')
const {program, InvalidArgumentError, Option} = require('commander')
const {generate} = require("./generate");

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
  .argument('<count>', 'Number of phrases to be generated', validateNumber(1, 10000))
  .argument('[passlength]', 'Length of the resulting password (in chars) or phrase (in words)', validateNumber(12, 128), "12")
  .option('-o, --out <outfile>', 'The name of the file where the passphrase are written to')
  .addOption(new Option('-m, --mode <mode>', 'Chooses the output mode').choices(['words', 'chars']).default('words') )
  .action(generate)

program.parse()
