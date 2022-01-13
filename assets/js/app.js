$(document).ready(()=>{
  $(".close-icon").click(function(){
    $(".navbar-collapse").animate({"right":"-100%"}, 200);
    $(".navbar-collapse").removeClass("show");
  });

  $(".navbar-toggler").click(function(){
    $(".navbar-collapse").animate({"right":"0%"}, 200);
  })
  $(".navbar .nav-item").click(function(){
    $(this).toggleClass("click-drop").siblings().removeClass("click-drop");
  });


  $(window).scroll(function(){
    $(".navbar").toggleClass("scrolled" ,$(this).scrollTop() > 50);
    $(".btn-up").toggleClass("active" , $(this).scrollTop() >50);
  })
  $('.project .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
  $('.team .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
  })
  $('.blog .owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },

        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
  })
  $('.brand .owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
          items:2,
          nav:true
      },
        1000:{
            items:3,
            nav:true
        },
        
        1200:{
            items:5,
            nav:true,
            loop:true
        }
    }
  })

  $(".btn-up").click(function(){
    $("html , body").animate({scrollTop:0}, 1000);
  })
  $(".lodaingPage").fadeOut(1000);
  new WOW().init();
})
