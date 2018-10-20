$(document).ready(function () {
    // $(function() {
    //     $('.scroll-link').click(function() {
    //       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //         if (target.length) {
    //           $('html, body').animate({
    //             scrollTop: target.offset().top
    //           }, 1000);
    //           return false;
    //         }
    //       }
    //     });
    // });

    // $(function () {
    //     $("#popupFeedbackPhone").mask("+38 (999) 999-99-99");
    //     $("#actionsPhone").mask("+38 (999) 999-99-99");
    // })

    $('.js-home-slider').slick({
      arrows: true,
      dots: true,
      infinite: true,
      // slidesToShow: 1,
      // slidesToScroll: 1,
      prevArrow: '.home-slider__prev',
      nextArrow: '.home-slider__next',
      customPaging: function (slider, i) {
        return '<span class="home-slider__dot"></span>';
      },
      // responsive: [
      //   {
      //     breakpoint: 1365,
      //     settings: {
      //       slidesToShow: 3
      //     }
      //   },
      //   {
      //     breakpoint: 765,
      //     settings: {
      //       slidesToShow: 2
      //     }
      //   },
      // ]
    })

    $('.js-home-product-slider').slick({
      arrows: true,
      dots: false,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '.home-product-slider__prev',
      nextArrow: '.home-product-slider__next',
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1365,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        },
      ]
    })
});
