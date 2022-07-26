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

//to hold reset button until answer chosen
document.getElementById("reset").disabled = true;

//function for rock on click
rock.addEventListener('click', function(){
	if (compAnswer === "rock"){
        answer.textContent = "ROCK";
        feedback.textContent = "Draw! Try again.";
        rock.style.backgroundColor = 'white';
    } else if (compAnswer === "paper"){
        answer.textContent = "PAPER";
        feedback.textContent = "Sorry! Paper beats rock. Try again.";
        rock.style.backgroundColor = 'red';
    } else {
        answer.textContent = "SCISSORS";
        feedback.textContent = "Rock beats scissors, you win!";
        rock.style.backgroundColor = 'green';
    }

    document.getElementById("reset").disabled = false;
})

//function for paper on click
paper.addEventListener('click', function(){
    if (compAnswer === "paper"){
        answer.textContent = "PAPER";
        feedback.textContent = "Draw! Try again.";
        paper.style.backgroundColor = 'white';
    } else if (compAnswer === "scissors"){
        answer.textContent = "SCISSORS";
        feedback.textContent = "Sorry! Scissors beats paper. Try again.";
        paper.style.backgroundColor = 'red';
    } else {
        answer.textContent = "ROCK";
        feedback.textContent = "Paper beats rock, you win!";
        paper.style.backgroundColor = 'green';
    }

    document.getElementById("reset").disabled = false;
})

//function for scissors on click 
scissors.addEventListener('click', function(){
    if (compAnswer === "scissors"){
        answer.textContent = "SCISSORS";
        feedback.textContent = "Draw! Try again.";
        scissors.style.backgroundColor = 'white';
    } else if (compAnswer === "rock"){
        answer.textContent = "ROCK";
        feedback.textContent = "Sorry! Rock beats scissors. Try again.";
        scissors.style.backgroundColor = 'red';
    } else {
        answer.textContent = "PAPER";
        feedback.textContent = "Scissors beats paper, you win!";
        scissors.style.backgroundColor = 'green';
    }

    document.getElementById("reset").disabled = false;
})

//reset button function 
function resetGame(){
    let compAnswer = randomItem(gameArray);
    console.log(compAnswer);
    answer.textContent = "";
    feedback.textContent = "";
    rock.style.backgroundColor = '';
    paper.style.backgroundColor = '';
    scissors.style.backgroundColor = '';
    
    rock.addEventListener('click', function(){
    if (compAnswer === "rock"){
        feedback.textContent = "Draw! Try again.";
        rock.style.backgroundColor = 'white';
    } else if (compAnswer === "paper"){
        feedback.textContent = "Paper wins! Try again.";
        rock.style.backgroundColor = 'red';
    } else {
        feedback.textContent = "Rock beats scissors, you win!";
        rock.style.backgroundColor = 'green';
    }

    document.getElementById("reset").disabled = false;
})

    rock.addEventListener('click', function(){
        if (compAnswer === "rock"){
            answer.textContent = "ROCK";
            feedback.textContent = "Draw! Try again.";
            rock.style.backgroundColor = 'white';
        } else if (compAnswer === "paper"){
            answer.textContent = "PAPER";
            feedback.textContent = "Sorry! Paper beats rock. Try again.";
            rock.style.backgroundColor = 'red';
        } else {
            answer.textContent = "SCISSORS";
            feedback.textContent = "Rock beats scissors, you win!";
            rock.style.backgroundColor = 'green';
        }

        document.getElementById("reset").disabled = false;
    })


    paper.addEventListener('click', function(){
        if (compAnswer === "paper"){
            answer.textContent = "PAPER";
            feedback.textContent = "Draw! Try again.";
            paper.style.backgroundColor = 'white';
        } else if (compAnswer === "scissors"){
            answer.textContent = "SCISSORS";
            feedback.textContent = "Sorry! Scissors beats paper. Try again.";
            paper.style.backgroundColor = 'red';
        } else {
            answer.textContent = "ROCK";
            feedback.textContent = "Paper beats rock, you win!";
            paper.style.backgroundColor = 'green';
        }

        document.getElementById("reset").disabled = false;
    })

 
    scissors.addEventListener('click', function(){
        if (compAnswer === "scissors"){
            answer.textContent = "SCISSORS";
            feedback.textContent = "Draw! Try again.";
            scissors.style.backgroundColor = 'white';
        } else if (compAnswer === "rock"){
            answer.textContent = "ROCK";
            feedback.textContent = "Sorry! Rock beats scissors. Try again.";
            scissors.style.backgroundColor = 'red';
        } else {
            answer.textContent = "PAPER";
            feedback.textContent = "Scissors beats paper, you win!";
            scissors.style.backgroundColor = 'green';
        }

        document.getElementById("reset").disabled = false;
    })
    
}