// tip amount = Bill amount x (tip percentage / 100)

// -You should have a form where a user is able to input the cost of the meal.
// -The form should also let the user choose the percentage tip they want to give.
// -When they submit the form, show them the total with tip added.
// -Display the total tip amount as well so they know how much they're tipping

// tip amount = Bill amount x (tip percentage / 100)




//calculator function 
function calcCost(){
	let cost = document.getElementById('cost').valueAsNumber;
	let tip = document.getElementById('tip').valueAsNumber;
	let tipCost = document.getElementById('tipCost')
	let total = document.getElementById('totalCost');

	//console.log(cost * (tip / 100));
	let tipAnswer = cost * (tip / 100); 
	let costAnswer = tipAnswer + cost;
	//.toFixed() method rounds to nearest decimal place indicated in parenthesis  
	tipCost.textContent = `Tip amount: $ ${tipAnswer.toFixed(2)}`;
	totalCost.textContent = `Total: $ ${costAnswer.toFixed(2)}`;

}

//reset function 
function resetCalc(){
	document.getElementById("calcForm").reset();
	tipCost.textContent = "";
	totalCost.textContent = "";
}