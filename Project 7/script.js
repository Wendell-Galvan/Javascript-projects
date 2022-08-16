// tip amount = Bill amount x (tip percentage / 100)

// -You should have a form where a user is able to input the cost of the meal.
// -The form should also let the user choose the percentage tip they want to give.
// -When they submit the form, show them the total with tip added.
// -Display the total tip amount as well so they know how much they're tipping

// tip amount = Bill amount x (tip percentage / 100)



function calcCost(){
	var cost = document.getElementById('cost').valueAsNumber;
	var tip = document.getElementById('tip').valueAsNumber;
	var total = document.getElementById('totalCost');

	console.log(cost * (tip / 100));
	total.textContent = cost * (tip / 100);

}