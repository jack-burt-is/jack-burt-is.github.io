var timer = true;
var cursor = true;
Barba.Dispatcher.on('newPageReady', function() {
  $('#coin-icon').hover(function() {
    console.log("hovered");
    if(cursor&&timer){
      cursor = false;
      timer = false;
      console.log("truth");
    
      $('.coins-svg').addClass('fade-out');
    
      setTimeout(function() {  
        $('.coins-svg').removeClass('fade-out');
        $('.coins-svg').addClass('draw-in-coin');
        $("#coin-icon").html($("#coin-icon").html());        },  
        1000
      );

      setTimeout(function() {  
         // $('svg').removeClass('fade-out');
        timer = true;
        $('.coins-svg').removeClass('draw-in-coin');
        },  
        2000
      );      
    }

  }, function() {
    cursor = true;
  })
});
