$(document).ready(function(){

    $('.search_results_in__carusel__list').slick({
        dots: false,
        arrows:true,
        autoplaySpeed:5000,
        infinite: true,
        speed: 1500,
        autoplay:true,
        fade: true,
    });

    $('.history_uzbekistan__list').slick({
      dots: false,
      arrows:true,
      autoplaySpeed:5000,
      infinite: true,
      speed: 1500,
      autoplay:true,
      fade: true,
    });

    $('.search_results_in__carusel__cart').slick({
        dots: false,
        arrows:true,
        infinite: true,
        autoplaySpeed:5000,
        speed: 1000,
        autoplay:true,
        slidesToShow: 4, 
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1010,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
      
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
      
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
        ]
    });

    $('.owl-carousel').owlCarousel({
      loop:false,
      margin:10,
      data:false,
      nav:true,
      autoplaySpeed:2000,
      autoplay:true,
        responsive:{
          0:{
            items:1
          },

          550:{
            items:2
          },

          750:{
            items:3
          },

          1010:{
            items:4
          },
    
          1250:{
            items:4
          }
      }
    });

    $('.electronic_library__list').slick({
      rows: 2,
      dots: false,
      arrows: true,
      infinite: true,
      autoplaySpeed:5000,
      speed: 1500,
      slidesToShow: 4,
      slidesToScroll: 1,
    
      responsive: [
        {
          breakpoint: 1010,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    }); 
})