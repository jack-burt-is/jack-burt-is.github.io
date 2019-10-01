var shouldTransition;

var slides;

var temp;



$( document ).ready(function(){



	shouldTransition = true;



	slides=['F', 'G', 'H', 'I', 'J'];

	temp = 1;

	currentslide = slides[temp];



	setInterval(transition, 10000);



});





Barba.Dispatcher.on('transitionCompleted', function() {









	$(".carousel__control--forward").on( "click", function() {

		increaseSlide();

		shouldTransition = false;

	});





	$(".carousel__control--backward").on( "click", function() {

		decreaseSlide();

		shouldTransition = false;

	});





});



function transition () {





	if(shouldTransition) {

		console.log("Transitioning...");

		

		$(".carousel__control--forward[for='" + currentslide +"']").trigger("click");



	}



	shouldTransition = true;



}



function increaseSlide() {



	if(temp < 4) {

		temp = temp+1;

		currentslide = slides[temp];

	} else {

		temp = 0;

		currentslide = slides[temp];

	}

}



function decreaseSlide() {

	if (temp > 0) {



		temp = temp-1;

		currentslide = slides[temp];

	} else {

		temp = 4

	}

}