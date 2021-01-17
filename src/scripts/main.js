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

    $(".header__toggle-btn").on('click', function(){
        $(".header__toggle-btn--1").toggleClass("active");  
        $(".header__toggle-btn--2").toggleClass("active"); 
        $(".header__toggle-btn--3").toggleClass("active"); 
        $(".header__menu").toggleClass("active");
    });
});