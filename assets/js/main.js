(function($){



$('.ex-category-slider').slick({
  dots: false,
  infinite: true,
  speed: 1300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 667,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});

$('.ms-slider').slick({
  dots: false,
  infinite: true,
  speed: 1300,
  draggable: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});
/*===========================
    Theme Functions
=============================*/
function theme_script(){
  
  $('.nav-dropdown > a').click(function(e){
      e.preventDefault();
      if ($(this).parent().hasClass('show')){
          $(this).parent().removeClass('show');
    } else {
       $('.nav-dropdown ').removeClass('show');
       $(this).parent().addClass('show');
      }
  });

  $(document).click(function(){
    $('.nav-dropdown ').removeClass('show');
  });

  /* Clicks within the dropdown won't make
     it past the dropdown itself */
  $(".nav-dropdown a").click(function(e){
    e.stopPropagation();
  });



  // video player
  var $video  = $("video");
   $video.click(function(){
      if (this.paused) {
         $video.trigger('pause');
         this.play();
         $video.attr('controls', false);
         $(this).attr('controls', true);
         $('.vlog-format-action').removeClass('hide');
         $(this).next().addClass('hide');
      }
  });
  // Button Click
  $(".vlog-format-action").click(function(e){
    e.preventDefault();
    
    $video.trigger('pause');
    $(this).prev('video').trigger('play');
    
    $video.attr('controls', false);
    $(this).prev('video').attr('controls', true);

    $('.vlog-format-action').removeClass('hide');
    $(this).addClass('hide');
  });

  

}
//============================
$(document).ready(function () {
   theme_script();
});
  
})(jQuery);