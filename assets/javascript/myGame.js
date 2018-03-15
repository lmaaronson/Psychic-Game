//declare variables to be used at start of game
//these are the state of the game
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var pyschicChoice = []
var userGuess = 0
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from
var guesslist = ""; 


function startGame() {
    guessesLeft = 9;
    guessesSoFar = [];
}

function psychic() {
    pyschicChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

}

alert("You have 9 guesses.  Can you read my mind? Pick a letter.");


// Randomly chooses a letter from the alphabet array. This is the psychic's choice.
psychic()


// This function is run whenever the user presses a key.
document.onkeyup = function (event) { //loop in implied here with onkey event
        guessesLeft = guessesLeft - 1 // guessesLeft--

        userGuess = event.key; //records user guess
        
        var guessleftSpan = document.getElementById("guessesLeft")//this fills the array with
            guessleftSpan.textContent = guessesLeft //this defines the array contents

        guessesSoFar.push(userGuess); //logs what the user guessed in the empty array

        guesslist = guessesSoFar.join(", " ); //this allows the array to have commas between each and shows choices in the array
            console.log(guesslist) 

        var guessSpan = document.getElementById("guessesSoFar")    ///puts the element inthe variable
            guessSpan.textContent = guesslist 
       
        // Determines which key was pressed. and does it match
        if (userGuess == pyschicChoice) {
            alert("You win");
            wins = wins + 1; //or wins ++
            

            var winsSpan = document.getElementById("wins")    ///puts the element inthe variable
            winsSpan.textContent = wins  //userGuess collects the key selected by the user and then is displayed here

            psychic();
            startGame();


        } else {
            //guessesLeft = guessesLeft - 1; /// guessesLeft--
            //var guessesSoFarSpan = document.getElementById("guessesSoFar")    ///puts the element inthe variable
            //guessesSoFarSpan.textContent = userGuess  //userGuess collects the key selected by the user and then is displayed here

        }

    console.log(guessesLeft + " " + losses);///this displays the guessleft and losses

        if (guessesLeft == 0) {

            losses++; // or losses = losses +1
           
            var lossesSpan = document.getElementById("losses")    ///puts the element inthe variable
            lossesSpan.textContent = losses  //userGuess collects the key selected by the user and then is displayed here

            psychic();
            startGame();

        }
    } 


    //use below code to write back to html to update losses, wins, under the if guessleft   using span wins and span losses
    //also for guesseleft using span guesses left and would go under the else

    //look up how to make a string and array or create e for loop to keep the guees in the display  array(implode) in PHP,  equivalent in JS  array.join(" ")  
                //push onto the array then join
    // var guessesSoFarSpan = document.getElementById("guessesSoFar")    ///puts the element inthe variable
    // guessesSoFarSpan.textContent= userGuess  //userGuess collects the key selected by the user and then is displayed here




    //need to understand that some document.getElementById("some content") creates a varible for info to be displayed in the html
    //then varible.textContent= "some content" returns the collected value of the varible to the html