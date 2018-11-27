// const inquirer = require('inquirer'); not sure if needed yet
var Letter = require("./letter.js") //pulling from letter.js file.

var Word= function(theWord){
    this.theWord= theWord;

    this.letters= []; // first * ? used for the letter constructor. 
    this.underscores= []; //underscores needed depending on the word chosen

    //function is needed to put the words separtley split up into the letters array
    this.wordSplit= function(){
        this.letters= this.theWord.split("");
        // console.log(this.letters) // THIS CONSOLE LOG SHOWS THE LETTERS ***comment out later****
        undersNeeded= this.letters.length;
        // console.log(this.underscores)
        console.log(this.underscores.join(""))
    }

    this.createLetters = function(){
        for (i=0; i < this.letters.length; i++){
            this.letters[i] = new Letter (this.letters[i]);
        
            this.letters[i].showLetter();
        }
    }
}
//***DELETE AFTER***//

// var newWord = new Word ("brodudeman")
// newWord.wordSplit();
// newWord.createLetters();

//***DELETE AFTER***//

module.exports= Word;



// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object
//  representing the current word the user is attempting to guess. That means the constructor should define:

    //   * An array of `new` Letter objects representing the letters of the underlying word

    //   * A function that returns a string representing the word. This should call the function on each letter 
    // object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

    //   * A function that takes a character as an argument and calls the guess function on 
    // each letter object (the second function defined in `Letter.js`)

    /*****OF ARRAY BELOW ****/

// var nbaTeams = ["hawks", "celtics", "nets", "hornets", "bulls", "cavaliers", 
// "mavericks", "nuggets", "pistons", "warriors", "rockets", "pacers", "clippers", 
// "lakers", "grizzlies", "heat", "bucks", "timberwolves", "pelicans", "knicks", 
// "thunder", "magic", "sixers", "suns", "trailblazers", "kings", "spurs", "raptors", "jazz", "wizards"];

// // console.log(nbaTeams)

// function teams(){
//     var work= Math.floor(Math.random()* nbaTeams.length)
//    console.log(JSON.parse(work))
// }

// teams()