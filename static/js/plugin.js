$(document).ready(function () {
    $('.js-home-slider').slick({
      arrows: true,
      dots: true,
      infinite: true,
      prevArrow: '.home-slider__prev',
      nextArrow: '.home-slider__next',
      customPaging: function (slider, i) {
        return '<span class="home-slider__dot"></span>';
      },
      responsive: [
        {
          breakpoint: 765,
          settings: {
            arrows: false
          }
        },
      ]
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

//# sourceMappingURL=plugin.js.map
