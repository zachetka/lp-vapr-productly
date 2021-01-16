$(function() {
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    $(".header__menu-btn").on('click', function(){
        $(".header__menu-btn--1").toggleClass("active");  
        $(".header__menu-btn--2").toggleClass("active"); 
        $(".header__menu-btn--3").toggleClass("active"); 
    });
});