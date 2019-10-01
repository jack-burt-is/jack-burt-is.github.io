$(document).ready(function() {



  var lastScrollTop = 0;



  $('.logo #horizon').addClass('tracking-in-expand');

  $('.logo #corp').addClass('tracking-in-expand');



  $(window).scroll(function () {

    

      //if you hard code, then use console

      //.log to determine when you want the 

      //nav bar to stick.  

    if ($(window).scrollTop() > 8) {

      $('.logo #horizon').removeClass('tracking-in-expand');

      $('.logo #corp').removeClass('tracking-in-expand');

      $('.logo #horizon').addClass('tracking-out-contract');

      $('.logo #corp').addClass('tracking-out-contract');

      $('.nav').addClass('nav-center');

      $('.logo img').addClass('enlarge'); 

      $('.logo img').removeClass('shrink');    



    }

    if ($(window).scrollTop() < 8) {

      $('.logo #horizon').removeClass('tracking-out-contract');

      $('.logo #corp').removeClass('tracking-out-contract');

      $('.logo #horizon').addClass('tracking-in-expand');

      $('.logo #corp').addClass('tracking-in-expand');

      $('.nav').removeClass('nav-center');

      $('.logo img').removeClass('enlarge');

      $('.logo img').addClass('shrink');    



    }

    var st = $(this).scrollTop();

     if (st > lastScrollTop){

       $('.nav').fadeOut();

     } else {

       $('.nav').fadeIn();

     }

     lastScrollTop = st;

    });

});

