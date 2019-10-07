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

// Don't forget to init the view!
Index.init();
Projects.init();
Contact.init();
RHS.init();
Retail.init();

ar FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */

    return $(this.oldContainer).animate({ opacity: 0 }).promise();
  },

  fadeIn: function() {
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */

    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility : 'visible',
      opacity : 0
    });

    $el.animate({ opacity: 1 }, 2000, function() {
      /**
       * Do not forget to call .done() as soon your transition is finished!
       * .done() will automatically remove from the DOM the old Container
       */

      _this.done();
    });
  }
});

/**
 * Next step, you have to tell Barba to use the new Transition
 */

Barba.Pjax.getTransition = function() {
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */

  return FadeTransition;
};
Barba.Pjax.start();

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

  document.getElementById("scroll-span").addEventListener("click", function(e) {
      fullpage_api.moveSectionDown();
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
    var element_select = '#' + e.target.id + ".character-item";

    switch (e.target.id) {
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