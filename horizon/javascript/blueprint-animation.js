var timer = true;
var cursor = true;

Barba.Dispatcher.on('newPageReady', function() {
  $('#blueprint-icon').hover(function() {
    console.log("hovered-blueprint");
    if(cursor&&timer){
      cursor = false;
      timer = false;
      console.log("truth");
    
      $('.blueprint-svg').addClass('fade-out');
    
      setTimeout(function() {  
        $('.blueprint-svg').removeClass('fade-out');
        $('.blueprint-svg').addClass('draw-in-blueprint');
        $("#blueprint-icon").html($("#blueprint-icon").html());        },  
        1000
      );

      setTimeout(function() {  
         // $('svg').removeClass('fade-out');
        timer = true;
        $('.blueprint-svg').removeClass('draw-in-blueprint');
        },  
        2500
      );      
    }

  }, function() {
    cursor = true;
  })
});
