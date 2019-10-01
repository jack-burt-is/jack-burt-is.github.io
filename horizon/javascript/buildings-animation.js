var timer = true;
var cursor = true;

Barba.Dispatcher.on('newPageReady', function() {
  $('#buildings-icon').hover(function() {
    if(timer&&cursor) {
      timer = false;
      cursor = false;
      $('#buildings-svg').removeClass('draw-in-buildings');
      $('#buildings-svg').addClass('fade-out');

      setTimeout(function() {  
          $('#buildings-svg').removeClass('fade-out');
          $('#buildings-svg').addClass('draw-in-buildings');
        },  
        750
      );

      setTimeout(function() {  
          timer = true;
        },  
        2500
      );
    }

  }, function() {
    cursor = true;
  })
});
