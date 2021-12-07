/* 

        Name: Fahira Delalic
        Course: CS412.1
        Assignment: Project 3 - A resume website done with Html & CSS & JavaScript
        Due date: 9.12.2021.
        Purpose: Familiarize ourselves with main JS elements and build an interactive website 
    
*/

//the following is the code for an arrow that pops up once we scroll the 
//page to some height and that can take the user up to the top

let button = document.getElementById("go-to-top"),
  body = document.body,
  docElem = document.documentElement,
  offset = 100,
  isChrome = navigator.userAgent.toLowerCase().indexOf("chrome") > -1,
  scrollPos,
  docHeight;


// Calculate the document height
docHeight = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  docElem.clientHeight,
  docElem.scrollHeight,
  docElem.offsetHeight
);
if (docHeight != "undefined") {
  offset = docHeight / 4;
}

// Add scroll event listener
window.addEventListener("scroll", function (event) {
  scrollPos = body.scrollTop || docElem.scrollTop;

  button.className = scrollPos > offset ? "visible" : "";
});

// Add click event listener
button.addEventListener("click", function (event) {
  event.preventDefault();
  if (isChrome) {
    docElem.scrollTop = 0;
  } else {
    body.scrollTop = 0; //to account for different browsers
  }
});

// the following is the code for the button that enables the user
// to choose between the dark or light mode

let switchButton = document.getElementById("switch");

switchButton.addEventListener("click", function(event) {

    let elements = document.getElementsByClassName("mode")
    let i;
    for(i=0; i<elements.length; i++)
    {
        elements[i].classList.toggle("to-dark");
    }
    
    
    switch(switchButton.innerHTML){
      case "Light Mode":
        // document.querySelector('#switch').innerHTML = 'Dark mode';
        // $('#switch').text('Dark mode');
        switchButton.innerHTML = "Dark Mode";
        break;
      case "Dark Mode":
        // document.querySelector('#switch').innerHTML = 'Light mode';
        // $('#switch').text('Light mode');
        switchButton.innerHTML = "Light Mode";
        break;
    }
    
});

// the following is a function that adds the date and time so that the user has that information too
function callDateTime(){
  let currentDate=(new Date()).toDateString();
  let currentTime=(new Date()).toLocaleTimeString(); 
  document.getElementById('watch').innerHTML=`${currentDate}-${currentTime}`;
}

setInterval(function(){  callDateTime() }, 1000);


// the following is a jquery animation that makes the content fade in as the page loads
$(document).ready(function(){
$(".container").fadeIn(3000);
document.getElementsByClassName[0].display = relative;
});


// the following is the jquery code that handles the tabbed content panel
$(document).ready(function(){
	$(".tabs li a").click(function() {
		
		// Active state for tabs
		$(".tabs li a").removeClass("active");
		$(this).addClass("active");
		
		// Active state for Tabs Content
		$(".tab_content_container > .tab_content_active").removeClass("tab_content_active").fadeOut(200);
		$(this.rel).fadeIn(500).addClass("tab_content_active");
		
	});	
});


let myself = {
  name: 'Fahira',
  surname: 'Delalić'
};

let myName = document.getElementById('name');
myName.innerHTML = myself.name + ' ' + myself.surname;
