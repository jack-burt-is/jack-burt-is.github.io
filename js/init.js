Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container) {
    $(container).find('script').each(function (i, script) {
        var $script = $(script);
        $.ajax({
            url: $script.attr('src'),
            cache: true,
            dataType: 'script',
            success: function () {
                $script.trigger('load');
            }
        });
    });
});

Barba.Dispatcher.on('transitionCompleted', function() {

	if ($('html').hasClass('fp-enabled')) {
        fullpage_api.destroy('all');
        console.log("fullpage destroyed");
      }

	var myFullpage = new fullpage('#fullpage', {
		licenseKey: '4C8536EC-EF87494D-999924A7-DBDBC06A',
		css3: true,
		lazyLoading: true,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		scrollBar:true,
		loopBottom: true,
		controlArrows: true,
		verticalCentered: true,
		navigation: true,
        navigationPosition: 'right',
	});

	document.getElementById("scroll-span").addEventListener("click", function(e) {
			fullpage_api.moveSectionDown();
	});

	var js = document.querySelector("script");
    if(js != null){
        eval(js.innerHTML);
    }

	AOS.init();

});