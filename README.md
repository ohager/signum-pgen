# signum-pgen
Just another small tool

Install globally

`npm i signum-pgen -g`


Run `signum-pgen --help`


```
Usage: signum-pgen [options] <count> [passlength]


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
  Version: 1.0.0
  

Arguments:
  count                Number of phrases to be generated
  passlength           Length of the resulting password (in chars) or phrase
                       (in words) (default: "12")

Options:
  -V, --version        output the version number
  -o, --out <outfile>  The name of the file where the passphrase are written to
  -m, --mode <mode>    Chooses the output mode (choices: "words", "chars",
                       default: "words")
  -h, --help           display help for command
```
