var clicked = false;
var id;

Barba.Dispatcher.on('newPageReady', function() {

	window.setTimeout(function() {

			AOS.init();
		},
		800
	);

	var circle = $('.circle');

  	circle.click(function(event) {
		//if(id != "" && id!=null) {
			id = event.target.id;
		//}
  		if(!clicked) {

			window.setTimeout(function() {  
		          $('.circle').addClass('circle-clicked');
		          $('#icon-container').addClass('icon-clicked');
		        },  
		        2000
		    );

		    $("svg").fadeOut(1000);
			$(".circle:not(#" + id + ")").parent().fadeOut(1000);
		    $(".circle #" + id).find('.description').fadeIn(800);
		    clicked = !clicked;

  		} else {
  			console.log(id)

		    $(".circle #" + id).find('.description').hide();

		    $(".circle").fadeOut(800);


	        $('.circle').removeClass('circle-clicked');
		    $('#icon-container').removeClass('icon-clicked');

			window.setTimeout(function() {  
		        $(".circle").parent().fadeIn(800);
  				$("svg").fadeIn(800);

		        },  
		        2000
		    );
		    
  			


		  	clicked = !clicked
  		}

  })
});
