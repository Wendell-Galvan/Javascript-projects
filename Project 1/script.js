/* 
-The count starts at 0
-Have two buttons on the screen, one to increase (+) the count by 1, and one button to lower (-) the count by 1.
-Pressing the plus button increases the count by 1, pressing the minus button decreases by 1
*/


let subtract = document.getElementById("decrement");
let add = document.getElementById("increment");

let number = document.getElementById("counter");
let integer = 0;

subtract.addEventListener('click', function(){
	integer -= 1;
	number.innerHTML = integer;
})

add.addEventListener('click', function(){
	integer += 1;
	number.innerHTML = integer;
})