// The user plays against the computer, so give them three buttons (rock, paper, scissors) to click
// -Every time the user plays/clicks a button, display the winner
// -A user can play as many times as they want


let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

let gameArray = ['rock', 'paper', 'scissors'];

function randomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

let compAnswer = randomItem(gameArray);
console.log(compAnswer);

rock.addEventListener('click', function(){
	if (compAnswer === "rock"){
        feedback.textContent = "Draw! Try again.";
    } else if (compAnswer === "paper"){
        feedback.textContent = "Paper wins! Try again.";
    } else {
        feedback.textContent = "Rock beats scissors, you win!";
    }
})

paper.addEventListener('click', function(){
    if (compAnswer === "paper"){
        feedback.textContent = "Draw! Try again.";
    } else if (compAnswer === "scissors"){
        feedback.textContent = "Scissors wins! Try again.";
    } else {
        feedback.textContent = "Paper beats rock, you win!";
    }
})

scissors.addEventListener('click', function(){
    if (compAnswer === "scissors"){
        feedback.textContent = "Draw! Try again.";
    } else if (compAnswer === "rock"){
        feedback.textContent = "Rock wins! Try again.";
    } else {
        feedback.textContent = "Scissors beats paper, you win!";
    }
})