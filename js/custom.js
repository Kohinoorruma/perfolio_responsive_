$(document).ready(function(){

    $(window).on('scroll',function(){
         var scrolling = $(this).scrollTop();

         if(scrolling > 610){
             $('.navbar').addClass('nav-bg');
         }else{
            $('.navbar').removeClass('nav-bg');
         }
    });

    //banner chat slider;
    $('.banner-chat-slider').slick({
        arrows: false,
        slidesToShow:4,
        slidesToScroll:1,
        vertical: true,
        autoplay: true,
    });

    //portfolio popup gallery
    $('.venobox').venobox();

    //funfact
    $('.counter').counterUp();
     
   //testimonial slider;
   $('.testimonial-slider').slick({
       arrows: false,
       slidesToShow: 2,
       slidesToScroll:1,
       autoplay: true,
       centerMode: true,
       centerPadding: 0,
       responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false
          }
        },

        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false
          }
        },

        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false
          }
        },
      
      
    ]
   });

   $('.offcanvas .green').on('click',function(){
     $('body').addClass('green').removeClass('purple').removeClass('orange').removeClass('pink');
   });
   $('.offcanvas .purple').on('click',function(){
    $('body').addClass('purple').removeClass('green').removeClass('orange').removeClass('pink');
  });
  $('.offcanvas .orange').on('click',function(){
    $('body').addClass('orange').removeClass('purple').removeClass('green').removeClass('pink');
  });
  $('.offcanvas .pink').on('click',function(){
    $('body').addClass('pink').removeClass('purple').removeClass('orange').removeClass('green');
  });
  $('.offcanvas .default').on('click',function(){
    $('body').removeClass('pink').removeClass('purple').removeClass('orange').removeClass('green');
  });


  $('.offcanvas #darkMode').on('click',function(){
    $('body').addClass('dark-mode')
  });


  $('.offcanvas #darkMode').on('click',function(){
    $('#banner').addClass('dark-mode')
  });

  $('.offcanvas #lightMode').on('click',function(){
    $('#banner,body').removeClass('dark-mode')
  });


});