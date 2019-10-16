var LabelArr;

var Index = Barba.BaseView.extend({
  namespace: 'index',
  onEnter: function() {
      
  },
  onEnterCompleted: function() {
    LabelArr = ['Home', 'About me', 'Skills & Technologies'];
    init(LabelArr);

    var isVisible = false;

    var textWrapper = document.querySelector('.ml9 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    animateIn();

    isVisible = true;

    window.onscroll = function() {index_scroll()};

    index_particles();
  }
});

var Projects = Barba.BaseView.extend({
  namespace: 'projects',
  onEnter: function() {
    
  },
  onEnterCompleted: function() {
    LabelArr = ['RHS Experience', 'Retail Game'];
    init(LabelArr);
  }
});

var Contact = Barba.BaseView.extend({
  namespace: 'contact',
  onEnter: function() {
    
  },
  onEnterCompleted: function() {
    LabelArr = ['Links', 'Form'];
    init(LabelArr);
  }
});

var RHS = Barba.BaseView.extend({
  namespace: 'rhs-experience',
  onEnter: function() {
    
  },
  onEnterCompleted: function() {
    LabelArr = ['Introduction', 'Features', 'Report'];
    init(LabelArr);
    window.onscroll = function() {rhs_scroll()};
  }
});

var Retail = Barba.BaseView.extend({
  namespace: 'retail-game',
  onEnter: function() {
    
  },
  onEnterCompleted: function() {
    LabelArr = ['Introduction', 'Trailer'];
    init(LabelArr);

    retail_arrows();
  }
});

var EmailConfirm = Barba.BaseView.extend({
  namespace: 'email-confirm',
  onEnter: function() {
    
  },
  onEnterCompleted: function() {
    LabelArr = ['Confirm'];
    init(LabelArr);
  }
});

var EmailFailure = Barba.BaseView.extend({
  namespace: 'email-failure',
  onEnter: function() {
    
  },
  onEnterCompleted: function() {
    LabelArr = ['Failed'];
    init(LabelArr);
  }
});

var FourOhFour = Barba.BaseView.extend({
  namespace: '404',
  onEnter: function() {
    
  },
  onEnterCompleted: function() {
    LabelArr = ['404'];
    init(LabelArr);
  }
});

// Don't forget to init the view!
Index.init();
Projects.init();
Contact.init();
RHS.init();
Retail.init();
EmailConfirm.init();
EmailFailure.init();
FourOhFour.init();

Barba.Prefetch.init();

var links = document.querySelectorAll('a[href]');
var cbk = function(e) {
 if(e.currentTarget.href === window.location.href) {
   e.preventDefault();
   e.stopPropagation();
 }
};

for(var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', cbk);
}


var transEffect = Barba.BaseTransition.extend({
  start: function(){
    this.newContainerLoading.then(val => this.fadeInNewcontent($(this.newContainer)));
  },
  fadeInNewcontent: function(nc) {
    nc.hide();
    var _this = this;
    $(this.oldContainer).fadeOut(1000).promise().done(() => {
      nc.css('visibility','visible');
        _this.done();
        nc.fadeIn(1000, function(){
        })
      });
    }
  });
Barba.Pjax.getTransition = function() {
  return transEffect;
}
Barba.Pjax.start();

document.getElementById("scroll-span").addEventListener("click", function(e) {
      fullpage_api.moveSectionDown();
  });

function init(labels) {
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
    navigationTooltips: labels
  });

  var js = document.querySelector("script");
    if(js != null){
        eval(js.innerHTML);
    }

  AOS.init();
}

function rhs_scroll() {
	 	var element = document.getElementById("screen1");
	 	var circle_element = document.getElementById("bg-circle");
	 	var container = document.getElementById("portrait-mockup-container");

  if (!fullpage_api.getActiveSection().isFirst) {
  	if(element.className !== "scrolled") {
  		element.className = "scrolled";
  		circle_element.className = "circle-expanded";
  		container.className = "container-scrolled"
  	}
  } else {
  	element.className = "";
  	circle_element.className = "";
  	container.className = "";
  }
}

function index_scroll() {

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

function retail_arrows() {

  var id_nums = [0,0,0,0];

  $(".arrow").click(function(e){

    if(e.target.id==="") {
      var target_id = e.target.parentElement.id;
    } else {
      var target_id = e.target.id;
    }
    
    var element_select = '#' + target_id + ".character-item";
    
    switch (target_id) {
      case 'hair':
        var num = 0;
        id_nums[num]++;
        if(id_nums[num] > 2) {
          id_nums[num]=0;
        }
        var translate_num = -250*id_nums[num];
        $(element_select).css({"-webkit-transform":"translate(" + translate_num + "px,0px)"});
        break;
    case 'shirt':
      var num = 1;
        id_nums[num]++;
        if(id_nums[num] > 2) {
          id_nums[num]=0;
        }
        var translate_num = -250*id_nums[num];
        $(element_select).css({"-webkit-transform":"translate(" + translate_num + "px,0px)"});
      break;
    case 'pants':
      var num = 2;
        id_nums[num]++;
        if(id_nums[num] > 2) {
          id_nums[num]=0;
        }
        var translate_num = -250*id_nums[num];
        $(element_select).css({"-webkit-transform":"translate(" + translate_num + "px,0px)"});
      break;
    case 'shoes':
      var num = 3;
        id_nums[num]++;
        if(id_nums[num] > 2) {
          id_nums[num]=0;
        }
        var translate_num = -250*id_nums[num];
        $(element_select).css({"-webkit-transform":"translate(" + translate_num + "px,0px)"});
        break;

    }
  });

}

function index_particles() {

// modified version of random-normal
NUM_PARTICLES = 600;
PARTICLE_SIZE = 0.5; // View heights
SPEED = 2; // Milliseconds
OFFSET = 12;

window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  if(check) {
    NUM_PARTICLES = 100;
    OFFSET = 5;
  }
};

function normalPool(o){var r=0;do{var a=Math.round(normal({mean:o.mean,dev:o.dev}));if(a<o.pool.length&&a>=0)return o.pool[a];r++}while(r<100)}function randomNormal(o){if(o=Object.assign({mean:0,dev:1,pool:[]},o),Array.isArray(o.pool)&&o.pool.length>0)return normalPool(o);var r,a,n,e,l=o.mean,t=o.dev;do{r=(a=2*Math.random()-1)*a+(n=2*Math.random()-1)*n}while(r>=1);return e=a*Math.sqrt(-2*Math.log(r)/r),t*e+l}


let particles = [];

function rand(low, high) {
  return Math.random() * (high - low) + low;
}

function createParticle(canvas) {
  const colour = {
    r: 255,
    g: randomNormal({ mean: 125, dev: 20 }),
    b: 50,
    a: rand(0, 0.5),
  };
  return {
    x: -2,
    y: -2,
    diameter: Math.max(0, randomNormal({ mean: PARTICLE_SIZE, dev: PARTICLE_SIZE / 2 })),
    duration: randomNormal({ mean: SPEED, dev: SPEED * 0.2 }),
    amplitude: randomNormal({ mean: 16, dev: 4 }),
    offsetY: randomNormal({ mean: 0, dev: OFFSET }),
    arc: Math.PI * 2,
    startTime: performance.now() - rand(0, SPEED),
    colour: `rgba(${colour.r}, ${colour.g}, ${colour.b}, ${colour.a})`,
  }
}

function moveParticle(particle, canvas, time) {
  const progress = ((time - particle.startTime) % particle.duration) / particle.duration;
  return {
    ...particle,
    x: progress,
    y: ((Math.sin(progress * particle.arc) * particle.amplitude) + particle.offsetY),
  };
}

function drawParticle(particle, canvas, ctx) {
  canvas = document.getElementById('particle-canvas');
  const vh = canvas.height / 100;

  ctx.globalCompositeOperation='destination-over';


  ctx.fillStyle = particle.colour;
  ctx.beginPath();
  ctx.ellipse(
    particle.x * canvas.width,
    particle.y * vh + (canvas.height / 2),
    particle.diameter * vh,
    particle.diameter * vh,
    0,
    0,
    2 * Math.PI
  );
  ctx.fill();
}

function draw(time, canvas, ctx) {
  // Move particles
  particles.forEach((particle, index) => {
    particles[index] = moveParticle(particle, canvas, time);
  })

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the particles
  particles.forEach((particle) => {
    drawParticle(particle, canvas, ctx);
  })

  // Schedule next frame
  requestAnimationFrame((time) => draw(time, canvas, ctx));
}

function initializeCanvas() {
  let canvas = document.getElementById('particle-canvas');
  canvas.width = canvas.offsetWidth * window.devicePixelRatio;
  canvas.height = canvas.offsetHeight * window.devicePixelRatio;
  let ctx = canvas.getContext("2d");

  window.addEventListener('resize', () => {
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx = canvas.getContext("2d");
  })

  return [canvas, ctx];
}

function startAnimation() {
  const [canvas, ctx] = initializeCanvas();

  // Create a bunch of particles
  for (let i = 0; i < NUM_PARTICLES; i++) {
    particles.push(createParticle(canvas));
  }
  
  requestAnimationFrame((time) => draw(time, canvas, ctx));
};

// Start animation when document is loaded
(function () {
  if (document.readystate !== 'loading') {
    startAnimation();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      startAnimation();
    })
  }
}());

}


