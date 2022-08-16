// -Create an HTML form with a three-question quiz
// -Each question should have four multiple-choice answers to choose from.
// -When the user submits the quiz, add a message underneath each question letting them know if they got it right/wrong 
// (give them the correct answer).

function answer(){
	var AT = document.getElementById("alanTuring");
	var CB = document.getElementById("charlesBabbage");
	var JH = document.getElementById("johnHerschel");
	var SJ = document.getElementById("steveJobs");

	if (AT.checked==true){
		answerOne.textContent = "Incorrect. The answer is Charles Babbage.";
	} else if (CB.checked==true){
		answerOne.textContent = "Correct! Charles Babbage invented the first computer although it was never built.";
	} else if (JH.checked==true){
		answerOne.textContent = "Incorrect. The answer is Charles Babbage.";
	} else if (SJ.checked==true){
		answerOne.textContent = "Incorrect. The answer is Charles Babbage.";
	} else {
		answerOne.textContent = "You did not select an answer. Please try again.";
	}

	var year1 = document.getElementById("1901");
	var year2 = document.getElementById("1985");
	var year3 = document.getElementById("1946");
	var year4 = document.getElementById("1996");

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

	var AL = document.getElementById("adaLovelace");
	var SW = document.getElementById("steveWozniak");
	var GB = document.getElementById("georgeBoole");
	var GH = document.getElementById("graceHopper");

	if (AL.checked==true){
		answerThree.textContent = "Correct!";
	} else if (SW.checked==true){
		answerThree.textContent = "Incorrect. Ada Lovelace was the first computer programmer.";
	} else if (GB.checked==true){
		answerThree.textContent = "Incorrect. Ada Lovelace was the first computer programmer.";
	} else if (GH.checked==true){
		answerThree.textContent = "Incorrect. Ada Lovelace was the first computer programmer.";
	} else {
		answerThree.textContent = "You did not select an answer. Please try again.";
	}

}

function resetGame(){
	var reset1 = document.getElementsByName("ans1");
	   for(var i=0;i<reset1.length;i++)
	      reset1[i].checked = false;
	answerOne.textContent ="";


	var reset2 = document.getElementsByName("ans2");
	   for(var i=0;i<reset2.length;i++)
	      reset2[i].checked = false;
	answerTwo.textContent ="";


	var reset3 = document.getElementsByName("ans3");
	   for(var i=0;i<reset3.length;i++)
	      reset3[i].checked = false;
	answerThree.textContent ="";
}
