

$(document).ready(function () {
    $('.testiSlide').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    
    autoplaySpeed: 1500,
    responsive: [{
    breakpoint: 850,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    }
    }]
    });
   });