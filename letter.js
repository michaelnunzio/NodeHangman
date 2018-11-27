// const inquirer = require('inquirer'); no inquire, idk if needed yet

var Letter= function(singleLetter){
        this.singleLetter= singleLetter; //string value to store
        this.correctLetterGuess= false; //A boolean value that stores whether that letter has been guessed yet
        this.showLetter= function(){
                if(this.correctLetterGuess){ //functipn that will return either true or false
                    console.log(singleLetter)
                } else {
                   console.log("_")
                }

            }
}
//***DELETE AFTER***/
// var newLetter= new Letter("b") //checking to see if the letter has been guessed. since it's not "a" obviously because nothing is defined, it should return _
// newLetter.showLetter()
//***DELETE AFTER***/

module.exports= Letter;
// this lets words use the letter file. 

       //     this.letterCheck= function(userGuess){
        //         if(userGuess === this.singleLetter){
        //             this.correctLetterGuess= true;
        //             return true;
        //         } else {
        //             return false;
        //         }
        // }