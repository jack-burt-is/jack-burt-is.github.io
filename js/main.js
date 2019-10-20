var LabelArr;
var isVisible = false;
var lastSection = 0;

var Index = Barba.BaseView.extend({
  namespace: 'index',
  onEnter: function() {
      
  },
  onEnterCompleted: function() {
    LabelArr = ['Home', 'About me', 'Skills & Technologies'];
    init(LabelArr);

    var textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    animateIn();
    isVisible = true;

    window.onscroll = function() {index_scroll()};

    //index_particles();
    vanta();
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

  //console.log(fullpage_api.getActiveSection());


    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180){

        animateOut();

        isVisible = false;

    } else {
        if(isVisible === false) {
            animateIn();
            isVisible = true;
        }
    }
}


  

// function animateIn() {
//     anime({
//         targets: '.ml9, #subtitle',
//         opacity: 1,
//         duration: 1000,
//         easing: "easeOutExpo"
//     });
//     anime({
//         targets: '.ml9 .letter',
//         scale: [0, 1],
//         duration: 1500,
//         elasticity: 600,
//         delay: (el, i) => 45 * (i+1)
//     });
// }

function animateIn() {
  anime.timeline({loop: false})
  .add({
    targets: '.ml11, #subtitle',
    opacity: [0,1],
    duration: 1000,
    easing: "easeOutExpo"
  })
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11 .line',
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 700
  })

}

function animateOut() {
  anime.timeline({loop: false})
    .add({
      targets: '.ml11, #subtitle',
      opacity: 0,
      duration: 100,
      easing: "easeOutExpo"
    })
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

function vanta() {
        VANTA.NET({
          el: "#section1",
          color: 0xff5050,
          points: 6.00,
          maxDistance: 21.00,
          spacing: 17.00
        })
}