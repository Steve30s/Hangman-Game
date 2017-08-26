// GLOABAL VARIABLES 
// ======================================================================
// arrays and variables for holding data
 var wordOptions = ["null","string","boolean","array","math","if","else","loop","object","methods","labels","arithmetic", "error", "date","scope","hoiste","undefined","function"];
 var selectedWord = "";
 var lettersinWord = [];
 var numBlanks = 0;
 var blanksAndSuccess = []; //s _ _ _ _ _ 
 var wrongLetters = [];

 // Game counters 
 var winCount = 0;
 var lossCount = 0; 
 var guessesLeft =9;

// FUNCTIONS (Reusable blocks of code thati will cll upon when needed)
// ======================================================================
function startGame (){
	selectedWord = wordOptions[Math.floor(Math.random()* wordOptions.length)];
    lettersinWord = selectedWord.split("");
     numBlanks =lettersinWord.length;

     // Reset 
     guessesLeft = 9; 
     wrongLetters = [];
     blanksAndSuccess = [];

     // Populate blanks and success with right nuber of blanks. 
     for (var i=0; i<numBlanks; i++){
     	blanksAndSuccess.push("_");
     }

 // Change HTML to reflect and success with right number of blanks
 document.getElementById("wordToGuess").innerHTML = blanksAndSuccess.join(" ");
 document.getElementById("numGuesses").innerHTML = guessesLeft;
 document.getElementById("winCounter").innerHTML = winCount;
 document.getElementById("lossCounter").innerHTML = lossCount;

 // Testing / Debuggin
  console.log (selectedWord);
  console.log (lettersinWord);
  console.log (numBlanks);
  console.log (blanksAndSuccess); 


 } 

function checkLetters(letter){
	// Check if letter exists in the code at all 
    	var islettersinWord = false;

	for (var i=0; i<numBlanks; i++){
		if(selectedWord[i] == letter) {
			islettersinWord = true;

		}
	}
  // Check where in the word the letter exists, then populates our blancksAndSuccess array
      if (islettersinWord) {
      	for (var i=0; i<numBlanks; i++){
      	if(selectedWord[i] == letter) {
      		blanksAndSuccess[i] = letter;
      	}
      }
 }
 // Letter wasn't found
else {
	wrongLetters.push(letter);
	guessesLeft--
}

// Testing and Debugging 
console.log(blanksAndSuccess);


            
}

function roundComplete (){
    console.log ("win Count: " + winCount + "| loss Count: " + lossCount + " | Guess Left" + guessesLeft);
 
     // Update the HTML to reflect the most recent count starts
     document.getElementById("numGuesses").innerHTML = guessesLeft;
     document.getElementById("wordToGuess").innerHTML = blanksAndSuccess.join(" ");
     document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

     // check if user won 
     if(lettersinWord.toString() == blanksAndSuccess.toString()){
     	winCount++;
     	alert("you won!");

     	// update the counter in the HTML
     	document.getElementById("winCounter").innerHTML.winCount;
     	startGame();
     }


     // check is user lost
     else if (guessesLeft == 0){
     	lossCount++;
     	alert ("you lost!");

     	// update the HTML
     	document.getElementById("lossCounter").innerHTML = lossCount; 
        startGame();
     }

}
 
 // MAIN PROCESS
// ======================================================================


// Initiate de code the first time
startGame();

// Register Keyclicks
document.onkeyup = function(event){
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	   checkLetters(letterGuessed); 
	   roundComplete();
	
	// Testing / Debuging 
	console.log(letterGuessed);
}



