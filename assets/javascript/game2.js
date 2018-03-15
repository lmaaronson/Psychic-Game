// Global Variables

let correct = 0;
let incorrect = 0;
let guessesLeft = 13;
let guessesSoFar = [];
let pyschicChoice = "";
let userGuess = "";

// array of all the letters in the english alphabet
let alphabet = [
			"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
			"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
			];

// for loop through the alphabet array
// for (let i = 0; i < alphabet.length; i++) {
// 		// console.log(alphabet[i]);
// 	};

// Randomly chooses a letter from the alphabet array. This is the psychic's choice.

let pyschic = () =>  {
	pyschicChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

	// console.log(pyschicChoice);

}

// Function to Reset Game to original settings
let resetGame = () => {
	guessesLeft = 13;
	guessesSoFar = [];
	pyschic();
};






// Grab users keystroke to intput there guess at the letter and start the game
document.onkeyup = (event) => {

	userGuess = event.key.toLowerCase();

	pyschic();

	console.log(userGuess);


	if (userGuess == pyschicChoice) {
		correct++;
		alertWin();
	} 
	if (userGuess != pyschicChoice) {
		guessesLeft--;
		guessesSoFar.push(userGuess);
	



	// Output to place on the webpage
	let html = 
		"<p>Guesses Left </p>" +
		"<p>"+ guessesLeft + "</p>" +
		"<p>Letters Guessed</p>" + 
		"<p>"+ guessesSoFar + "</p>" +
		"<br>" +
		"<p>Correct </p>" + 
		"<p>"+ correct + "</p>" +
		"<p>Incorrect </p>" + 
		"<p>"+ incorrect + "</p>";

	// Set the inner HTML contents of the game_output id to our html string
    document.querySelector("#game_output").innerHTML = html;

    if ( guessesLeft === 0 ) {
		incorrect++;
		alertLoss();
		}
	}

};

let alertWin = () => {
	alert("Congratulations I was thinking of " + pyschicChoice + ".");
	resetGame();
};

let alertLoss = () => {
	alert("I am sorry you are incorrect, I was thinking of " + pyschicChoice + ". " + "You Guessed " + userGuess + ".");
	resetGame();
};