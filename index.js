var Word= require("./word.js") // word call from word.js file
// var Letter = require("./letter.js")
var inquirer = require('inquirer'); //inquirer npm package for questions

//***Words to Choose From***/
var nbaTeams = ["hawks", "celtics", "nets", "hornets", "bulls", "cavaliers", 
"mavericks", "nuggets", "pistons", "warriors", "rockets", "pacers", "clippers", 
"lakers", "grizzlies", "heat", "bucks", "timberwolves", "pelicans", "knicks", 
"thunder", "magic", "sixers", "suns", "trailblazers", "kings", "spurs", "raptors", "jazz", "wizards"];
//*** --- ***/

var rightGuess= false; // make it false always, unless it actually matches.

//***delete after possibly***/
var randomTeam;
var newTeam;
//***delete after possibly***/

//***GAME COUNTERS start***/
var wins = 0;
var losses = 0;
var guessesLeft = 9;
//***GAME COUNTERS end***/

//**Storing the letters already guessed and storing them in an array.**/
var guessedLetters= "";
var guessedLettersArray= [];
//*** --- ***/

//***Correct Guesses so far***/
var correctGuesses= 0;
//*** use to track if the inquire Q's */

// var rules= "" at the end make it console log & add how to play the game. 

//Start Game
function startGame(){
    guessesLeft= 9; //make it reset for each one. 
    getRandomTeam()//**function to choose rando word */ INSERT HERE
    guessedLetters= "";
    guessedLettersArray= [];
}
 //function to get a random option from the nba teams array
function getRandomTeam(){

    randomTeam= nbaTeams[Math.floor(Math.random()* nbaTeams.length)];
   console.log(randomTeam) // test if it works. It does.
    newTeam= new Word (randomTeam);
    // console.log("Your word contains " + randomTeam.length + " letters."); // **delete later good for now** used to see how many # / _
    console.log("Word To Guess: ")
    newTeam.wordSplit(); //call function one from word.js
    newTeam.createLetters(); //call function two from word.js 
    guessLetter(); //**insert new function to see which letter to choose**/

}

function guessLetter(){
    if(correctGuesses < newTeam.letters.length || guessesLeft > 0) {
        inquirer.prompt([ 
        {
            name: "letter",
            message: "Choose A letter?",
        }
    ]).then(function(answer) {
        console.log("You Guessed: " + answer.letter);
        rightGuess= false; //still assuming the guess was wrong. 
        //now, stop the user from guessing the same thing 
        if(guessedLettersArray.indexOf(answer.letter) > -1) { //this is if they guessed the same thing twice.
            console.log("You already guessed that! Try a new letter please. ")
            console.log("---------------------------------------------------------") //this is just to break up the questions. after, run this function again for the inquirer.
            guessLetter(); 
        }
        // if this is a new guess / one that hasn't been used yet on this word.
        else if(guessedLettersArray.indexOf(answer.letter)=== -1){
            guessedLetters= guessedLetters.concat(" " + answer.letter);
            guessedLettersArray.push(answer.letter);
            console.log("Letters already Guessed: " + guessedLetters) //displays guessed letters. might have to add padding ?
            //loop through 
            for(i=0; i < newTeam.letters.length; i++) {
                if(answer.letter === newTeam.letters[i].character && newTeam.letters[i].correctLetterGuess=== false){ //get this from the letter.js file
                    newTeam.letters[i].correctLetterGuess === true;
                    // also, set right guess to true.
                    rightGuess= true;
                    newTeam.underscores[i]= answer.letter //maybe comment out? go back to.
                    correctGuesses++
                }
            }
                console.log("Word To Guess:")
                newTeam.wordSplit();
                newTeam.createLetters();

                //if the user chooses a correct guess
                if(rightGuess){
                    console.log("Correct!")
                    console.log("---------------------------------------------------------") //this is just to break up the questions.
                    imAwinner()
                }else{
                    console.log("Wrong!!!")
                    guessesLeft--;
                    console.log("---------------------------------------------------------") //this is just to break up the questions.
                    imAwinner()
                }

        }

    })

    } //if end
} //function end

//***New function to see if the user won or lost**/
function imAwinner(){
    if(guessesLeft===0) {
        console.log("---------------------------------------------------------") //this is just to break up the questions.
        console.log("WRONG! You lose. The correct answer was: " + randomTeam)
        losses++
        console.log("Wins: " + wins)
        console.log("Losses: " + losses)
        console.log("---------------------------------------------------------") //this is just to break up the questions.
        //add a play again function HERE ****
    } else if(correctGuesses=== newTeam.letters.length){
        console.log("---------------------------------------------------------") //this is just to break up the questions.
        console.log("WINNER WINNER CHICKEN DINNER! You know your NBA Teams!!")
        wins++
        console.log("Wins: " + wins)
        console.log("Losses: " + losses)
        console.log("---------------------------------------------------------") //this is just to break up the questions.
        //add a play again function HERE ****
    } else {
        guessLetter()//run the guess letter function to keep playing if you neither won nor lost.
    }
} //winner function end 

startGame();
//***--FOR TOMORROW--***/


// must add a play again function 
//figure out how to get correct answers to work.

//**refrence for inquirer from class*//
// function inquire(callsLeft) {
//     if (callsLeft > 0) {
//       inquirer.prompt([
//         {
//           name: "name",
//           message: "What is your name?"
//         }, {
//           name: "position",
//           message: "What is your current position?"
//         }, {
//           name: "age",
//           message: "How old are you?"
//         }, {
//           name: "language",
//           message: "What is your favorite programming language?"
//         }
//       ]).then(function(answers) {
//         // initializes the variable newProgrammer to be a programmer object which will take
//         // in all of the user's answers to the questions above
//         var newProgrammer = new Programmer(answers.name, answers.position, answers.age, answers.language);
//         // printInfo method is run to show that the newProgrammer object was successfully created and filled
//         newProgrammer.printInfo();
//         inquire(callsLeft - 1);
//       });
//     }
//   }



