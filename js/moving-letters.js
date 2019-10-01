// Wrap every letter in a span
var isVisible = false;

var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

animateIn();

isVisible = true;


window.onscroll = function() {myFunction()};

function myFunction() {

    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180){
    // document.getElementById("myImg").className = "slideUp";

        animateOut();

        isVisible = false;

    } else {
        if(isVisible === false) {
            animateIn();
            isVisible = true;
        }
    }
}

function animateIn() {
    anime({
        targets: '.ml9, #subtitle',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo"
    });
    anime({
        targets: '.ml9 .letter',
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 45 * (i+1)
    });
}

function animateOut() {
    anime({
        targets: '.ml9, #subtitle',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo"
    });
}