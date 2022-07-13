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


const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log('Random Number', randomNumber);

function chooseNumber(){
	let userGuess = document.getElementById('guess').value;

	if (userGuess === randomNumber){
		alert ("Nice guess! You win")
	};

};