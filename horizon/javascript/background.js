Barba.Dispatcher.on('newPageReady', function() {

	$('.nav a').click(function(){
		setTimeout(function(){
		    $('.door-top').addClass('door-top-start');
			$('.door-bottom').addClass('door-bottom-start');
		  },1000); 

		  setTimeout(function(){
		    $('.door-top').removeClass('door-top-start');
			$('.door-bottom').removeClass('door-bottom-start');
		  },2000); 
	});
})