Barba.Dispatcher.on('transitionCompleted', function() {

	var pathname = window.location.pathname;
	console.log("headersize");
	if(pathname === '/index.html' || pathname === '/') {
		console.log("enlarging");

		$(".scalable-wrapper").addClass("index");
		$(".logo").addClass("index");
		$(".logo p").addClass("index");
		$(".logo img").addClass("index");
		$(".logo#horizon").addClass("index");
		$(".logo#corp").addClass("index");
		$(".nav ul").addClass("index");
	}

});

Barba.Dispatcher.on('initStateChange', function() {

	var pathname = window.location.pathname;
	console.log("headersize");
	if(pathname === '/index.html') {

	} else{
		console.log("shrinking");

		$(".scalable-wrapper").removeClass("index");
		$(".logo").removeClass("index");
		$(".logo p").removeClass("index");
		$(".logo img").removeClass("index");
		$(".logo#horizon").removeClass("index");
		$(".logo#corp").removeClass("index");
		$(".nav ul").removeClass("index");
	}

});

