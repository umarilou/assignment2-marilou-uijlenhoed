
//Clock Amsterdam time
var spaceClock = function(){ 
	var clock = document.getElementById("clock"); 
	var date = new Date(); 
	clock.innerHTML = date.toLocaleTimeString();
	var hour = date.getHours();


	//if it's evening show moon above the houses, during the day it's a sun
	if((hour >= 20) || (hour <= 6)){
		document.getElementById("time").src = "images/moon.png";
	} else {
		document.getElementById("time").src = "images/sun.png";
	}
}; 

spaceClock(); 
setInterval(spaceClock, 1000);



// //Clock Mars time

var spaceMarsClock = function(){

	var marsClock = document.getElementById("marsClock"); 
	var marsDate = new Date(); 
	var utcOffset = marsDate.getTimezoneOffset();
	var marsDate = new Date(marsDate.setMinutes(marsDate.getMinutes()+utcOffset));
	var marsTime = marsDate.toLocaleTimeString();

	marsClock.innerHTML = marsTime;

}; 

spaceMarsClock(); 
setInterval(spaceMarsClock, 1000);

// background 
 

var changeSky = document.getElementById("button");
var skyType = "earth";

changeSky.onclick = function() {

	if(skyType == "earth"){
		document.body.style.background = "url('images/marsSky.jpg')";
		skyType = "mars";
	} else {
		document.body.style.background = "url('images/earthSky.jpg')";
		skyType = "earth";
	}
}