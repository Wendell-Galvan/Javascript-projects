// -Display the hours, minutes, and seconds.
// -The clock should run by itself. (Hint: look at JavaScript setInterval function)
// -The clock should automatically update the time every second.


function myClock() {
  const date = new Date();
document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}


setInterval(myClock, 1000);