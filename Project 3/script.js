/*
-A user has three tries to guess the number, between 1-100, that the computer picked.
-Whenever they guess, let them know if their guess is too high, or too low.
-After their third guess, reveal the number the computer chose to them, and let them know if they got it right or wrong.
-Use an HTML form to create an input field for the user to enter their guess
-Add a "Submit" button to the form, and use the "onsubmit" attribute to call your JavaScript function.
-When your form submits, it'll disappear (which you don't want) and the reason this is happening is because the "form" is 
trying to actually submit data to a backend somewhere, but there's no backend, you just want to use the form submission to trigger 
your JavaScript function. To solve this, Google "html prevent form submit" and that should point you in the right direction.
*/

let submitButton = document.getElementById('submit');
let playAgain = document.getElementById('playAgain');
let randomNumber = Math.floor(Math.random() * 100) + 1;
   console.log('Random Number', randomNumber);
let guessCount = 0;

function chooseNumber(event){
	event.preventDefault();

	let feedback = document.getElementById('feedback');
	let userGuess = document.getElementById('guess').valueAsNumber; 

	if (userGuess < 1 || userGuess > 100){
		feedback.textContent = "Not a valid number. Please guess a number between 1 and 100";
	} else if (userGuess === randomNumber){
		feedback.textContent = "Congrats! You got it right.";
	} else if (userGuess < randomNumber){
		feedback.textContent = "Too low! You guessed " + userGuess + ". Try again";
	} else if (userGuess > randomNumber){
		feedback.textContent = "Too high! You guessed " + userGuess + ". Try again";
	} else {
		feedback.textContent = "Guess a number between 1 and 100";
	}

	guessCount++;
	if (guessCount === 3){
		alert("Your three attempts are up! Game over. Try again.");
		feedback.textContent = "Guess a number between 1 and 100";
		document.getElementById('guess').value = '';
		guessCount = 0;
		randomNumber = Math.floor(Math.random() * 100) + 1;
			console.log('Random Number', randomNumber);	
	}

};

//Reload game
playAgain.addEventListener('click', function(){
	document.getElementById('guess').value = '';
	guessCount = 0;
	randomNumber = Math.floor(Math.random() * 100) + 1;
		console.log('Random Number', randomNumber);
})


//Game over reset 
// submitButton.addEventListener('click', function(){
// 	guessCount++;
// 	if (guessCount === 3){
// 		alert("Your three attempts are up! Game over. Try again.");
// 		document.getElementById('guess').value = '';
// 		guessCount = 0;
// 		randomNumber = Math.floor(Math.random() * 100) + 1;
// 			console.log('Random Number', randomNumber);	
// 	}
// })
