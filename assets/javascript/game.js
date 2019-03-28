// create all my variables
var wins = 0;
var losses = 0;
var guessesLest = 10;
var lettersGuessed = [];
var alphabets = []
var randomIndex
var computerChoice = alphabets[randomIndex];


// create all variables that referecme specific parts of the page

// $wins
// $loses
// $guessesLeft

// create a fucntion to reset the game
function newGame() {
  //reset important game variables
  // assign computerGuess a new random letter
  // reset the lettersAlreadyGuessed array
  lettersAlreadyGuessed.length = 0;
  //reset guessesLeft back to 10
  //maybe write some infromattion to the page incicationgf a new hame has started
}

document.onkeyup = function(event) {
  //run our logic to check our guess

  //capture user's guess using event.key

  // if userGuess === computerGuess... you win
    // increase wins by 1
    //start a new game newGame()

  // else
    //decrement guesses left by 1

  // elseif if guessesLeft ===0.. you lose
    //increase loses by 1
    //start a new game

  //add letter to the already guessed

  // display information to the page 
    // write userGuess, computerguess, gueses eft, and letterAlreadyGuessed to the page intheir repsective locations (which you created refrences to above.)

}

// run newGame() to start game for the first time

// newGame();