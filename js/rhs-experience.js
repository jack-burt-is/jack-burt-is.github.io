window.onscroll = function() {myFunction()};

function myFunction() {
	 	var element = document.getElementById("screen1");
	 	var circle_element = document.getElementById("bg-circle");
	 	var container = document.getElementById("portrait-mockup-container");

  if (!fullpage_api.getActiveSection().isFirst) {
  	if(element.className !== "scrolled") {
  		element.className = "scrolled";
  		circle_element.className = "circle-expanded";
  		container.className = "container-scrolled"
  	}
  } else {
  	element.className = "";
  	circle_element.className = "";
  	container.className = "";
  }
}