$(document).ready(()=>{
  $(".close-icon").click(function(){
    $(".navbar-collapse").animate({"right":"-100%"}, 200);
    $(".navbar-collapse").removeClass("show");
  });

  $(".navbar-toggler").click(function(){
    $(".navbar-collapse").animate({"right":"0%"}, 200);
  })
  $(".nav-item").click(function(){
    $(this).toggleClass("click-drop")
  })
})