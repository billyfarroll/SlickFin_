var $fade =  $(".fade"); //Calling the class in HTML

$(window).scroll(function () { //Using the scroll global variable
    $fade.each(function () {
      
        fadeMiddle = $(this).offset().top + (0.4 *$(this).height());
        windowBottom = $(window).scrollTop() + $(window).height();
        
        if (fadeMiddle < windowBottom) {
          $(this).addClass("FadeIn");
        }
    });
});

/* On Load: Trigger Scroll Once*/
$(window).scroll();

var $fadeCenter =  $(".fadeCenter"); //Calling the class in HTML

$(window).scroll(function () { //Using the scroll global variable
    $fadeCenter.each(function () {
      
        fadeMiddle = $(this).offset().top + (0.4 *$(this).height());
        windowBottom = $(window).scrollTop() + $(window).height();
        
        if (fadeMiddle < windowBottom) {
          $(this).addClass("FadeCenter");
        }
    });
});

/* On Load: Trigger Scroll Once*/
$(window).scroll();


//Fade in web browser renders screen - first js script function

var $fadeDown =  $(".fadeDown"); //Calling the class in HTML

$(window).scroll(function () { //Using the scroll global variable
    $fadeDown.each(function () {
      
        fadeMid = $(this).offset().top + (0.4 *$(this).height());
        windowBottom = $(window).scrollTop() + $(window).height();
        
        if (fadeMid < windowBottom) {
          $(this).addClass("FadeDown");
        }
    });
});

/* On Load: Trigger Scroll Once*/
$(window).scroll();


//Fade in web browser renders screen - first js script function

var $fadeDown1 =  $(".fadeDown1"); //Calling the class in HTML

$(window).scroll(function () { //Using the scroll global variable
    $fadeDown1.each(function () {
      
        fadeMid = $(this).offset().top + (0.4 *$(this).height());
        windowBottom = $(window).scrollTop() + $(window).height();
        
        if (fadeMid < windowBottom) {
          $(this).addClass("FadeDown1");
        }
    });
});

/* On Load: Trigger Scroll Once*/
$(window).scroll();



var $fadeLeft =  $(".fadeLeft"); //Calling the class in HTML

$(window).scroll(function () { //Using the scroll global variable
    $fadeLeft.each(function () {
      
        fadeMid = $(this).offset().top + (0.4 *$(this).height());
        windowBottom = $(window).scrollTop() + $(window).height();
        
        if (fadeMid < windowBottom) {
          $(this).addClass("FadeLeft");
        }
    });
});

/* On Load: Trigger Scroll Once*/
$(window).scroll();


var $fadeRight =  $(".fadeRight"); //Calling the class in HTML

$(window).scroll(function () { //Using the scroll global variable
    $fadeRight.each(function () {
      
        fadeMid = $(this).offset().top + (0.4 *$(this).height());
        windowBottom = $(window).scrollTop() + $(window).height();
        
        if (fadeMid < windowBottom) {
          $(this).addClass("FadeRight");
        }
    });
});

/* On Load: Trigger Scroll Once*/
$(window).scroll();



var $fade_shimmer =  $(".shimmer_fade, .work_fade"); //Calling the class in HTML

$(window).scroll(function () { //Using the scroll global variable
    $fade_shimmer.each(function () {
      
        fadeMiddle = $(this).offset().top + (0.4 *$(this).height());
        windowBottom = $(window).scrollTop() + $(window).height();
        
        if (fadeMiddle < windowBottom) {
          $(this).addClass("shimmer, work_shimmer");
        }
    });
});

/* On Load: Trigger Scroll Once*/
$(window).scroll();


var $fade_grow =  $(".grow_fade"); //Calling the class in HTML

$(window).scroll(function () { //Using the scroll global variable
    $fade_grow.each(function () {
      
        fadeMiddle = $(this).offset().top + (0.4 *$(this).height());
        windowBottom = $(window).scrollTop() + $(window).height();
        
        if (fadeMiddle < windowBottom) {
          $(this).addClass("grow_body");
        }
    });
});

/* On Load: Trigger Scroll Once*/
$(window).scroll();





// New function - for the opacity styles.css - fade out logo img
$(window).scroll(function() {

    if ($(this).scrollTop()>150)
     {
        $('.logo-container-div').addClass('show');
     }
    else
     {
      $('.logo-container-div').removeClass('show');
     }
  
  
 });

// Nav bar function 

$(window).scroll(function(e){
    if ($(this).scrollTop() > 300) { // choose the value you want.
        $('#nav_bar:hidden').slideDown();
    } else {
        $('#nav_bar:visible').slideUp();
    }
});

// Top Arrow JS

if ($('#return-to-top').length){
  
  var scrollTrigger = 200, 
  returnToTop = function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > scrollTrigger) {
      
      $('#return-to-top').addClass('show');
       
    } else {
      
      $('#return-to-top').removeClass('show');
      
    }
    
  };

     returnToTop();
       $(window).on('scroll', function () {
         returnToTop();             
                  
    });
  
   $('#return-to-top').on('click', function(e){
     e.preventDefault();
     $('html,body').animate({
          scrollTop: 0
       
     }, 700);
     
   });

}

// Top Arrow JS

$(window).scroll(function () {
    $(".scr_fade").each(function () {
        if (($(this).offset().top - $(window).scrollTop()) < -25) {
            $(this).addClass('hidden');
        } else {
            $(this).removeClass('hidden');
        }
    });
});

