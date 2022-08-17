// -Create an HTML form with a three-question quiz
// -Each question should have four multiple-choice answers to choose from.
// -When the user submits the quiz, add a message underneath each question letting them know if they got it right/wrong 
// (give them the correct answer).


function questionOne(){
	let at = document.getElementById("alanTuring");
	let cb = document.getElementById("charlesBabbage");
	let jh = document.getElementById("johnHerschel");
	let sj = document.getElementById("steveJobs");

	if (at.checked==true){
		answerOne.textContent = "Incorrect. The answer is Charles Babbage.";
	} else if (cb.checked==true){
		answerOne.textContent = "Correct! Charles Babbage invented the first computer although it was never built.";
	} else if (jh.checked==true){
		answerOne.textContent = "Incorrect. The answer is Charles Babbage.";
	} else if (sj.checked==true){
		answerOne.textContent = "Incorrect. The answer is Charles Babbage.";
	} else {
		answerOne.textContent = "You did not select an answer. Please try again.";
	}
}

function questionTwo(){
	let year1 = document.getElementById("1901");
	let year2 = document.getElementById("1985");
	let year3 = document.getElementById("1946");
	let year4 = document.getElementById("1996");

	if (year1.checked==true){
		answerTwo.textContent = "Incorrect. The answer is 1946.";
	} else if (year2.checked==true){
		answerTwo.textContent = "Incorrect. The answer is 1946.";
	} else if (year3.checked==true){
		answerTwo.textContent = "Correct!";
	} else if (year4.checked==true){
		answerTwo.textContent = "Incorrect. The answer is 1946.";
	} else {
		answerTwo.textContent = "You did not select an answer. Please try again.";
	}
}

function questionThree(){
	let al = document.getElementById("adaLovelace");
	let sw = document.getElementById("steveWozniak");
	let gb = document.getElementById("georgeBoole");
	let gh = document.getElementById("graceHopper");

	if (al.checked==true){
		answerThree.textContent = "Correct!";
	} else if (sw.checked==true){
		answerThree.textContent = "Incorrect. Ada Lovelace was the first computer programmer.";
	} else if (gb.checked==true){
		answerThree.textContent = "Incorrect. Ada Lovelace was the first computer programmer.";
	} else if (gh.checked==true){
		answerThree.textContent = "Incorrect. Ada Lovelace was the first computer programmer.";
	} else {
		answerThree.textContent = "You did not select an answer. Please try again.";
	}
}

function answer(){
	questionOne();
	questionTwo();
	questionThree();
}

function resetGame(){
	let reset1 = document.getElementsByName("ans1");
	   for(let i=0;i<reset1.length;i++)
	      reset1[i].checked = false;
	answerOne.textContent ="";


	let reset2 = document.getElementsByName("ans2");
	   for(let i=0;i<reset2.length;i++)
	      reset2[i].checked = false;
	answerTwo.textContent ="";


	let reset3 = document.getElementsByName("ans3");
	   for(let i=0;i<reset3.length;i++)
	      reset3[i].checked = false;
	answerThree.textContent ="";
}
