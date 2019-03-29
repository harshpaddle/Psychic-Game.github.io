// create all my variables
var wins = 0;
var losses = 0;
var alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
var randomIndex = Math.floor(Math.random() * 26);
var guessesLeft = 10;
var computerChoice = alphabets[randomIndex];
var lettersGuessed = '';


// create all variables that referecme specific parts of the page

// $wins
// $loses
// $guessesLeft

// create a fucntion to reset the game

newGame()


function newGame() {
  lettersGuessed = '';
  computerChoice = alphabets[randomIndex];
  guessesLeft = 10;

  //reset important game variables
  // assign computerGuess a new random letter
  // reset the lettersAlreadyGuessed array

  //reset guessesLeft back to 10
  //maybe write some infromattion to the page incicationgf a new hame has started
}

document.onkeyup = function(event) {
  //run our logic to check our guess
  //capture user's guess using event.key
  var userGuess = event.key;
  
  if (userGuess === computerChoice) {
    wins++;
    newGame();
  } else if (guessesLeft === 0) {
    losses++;
    newGame();
  } else {
    lettersGuessed += userGuess + ', ';
    guessesLeft--;
  };

  document.getElementById('wins').innerHTML = wins;
  document.getElementById('losses').innerHTML = losses;
  document.getElementById('guessesLeft').innerHTML = guessesLeft;
  document.getElementById('guesses').innerHTML = lettersGuessed;

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